import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable, Observer, Subscription} from 'rxjs';


import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class SocketMessageService {
  stompClient = null;
  subscriber = null;
  connection: Promise<any>;
  connectedPromise: any;
  listener: Observable<any>;
  listenerObserver: Observer<any>;
  alreadyConnectedOnce = false;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.connection = this.createConnection();
    this.listener = this.createListener();
  }

  connect() {
    if (this.connectedPromise === null) {
      this.connection = this.createConnection();
    }
    // building absolute path so that websocket doesn't fail when deploying with a context path
    let url;
    url = '//localhost:8080/websocket/message';
    const authToken = localStorage.getItem(this.userService.accessTokenLocalStorageKey);
    if (authToken) {
      url += '?access_token=' + authToken;
    }
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
    const headers = {};
    this.stompClient.connect(
      headers,
      () => {
        this.connectedPromise('success');
        this.connectedPromise = null;
        if (!this.alreadyConnectedOnce) {
          this.subscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
              this.sendMessage('test1');
            }
          });
          this.alreadyConnectedOnce = true;
        }
      }
    );
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
      this.stompClient = null;
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this.alreadyConnectedOnce = false;
  }

  receive() {
    return this.listener;
  }

  sendMessage(message) {
    if (this.stompClient !== null && this.stompClient.connected) {
      this.stompClient.send(
        '/new-message', // destination
        JSON.stringify(message), // body
        {} // header
      );
    }
  }

  subscribe() {
    this.connection.then(() => {
      this.subscriber = this.stompClient.subscribe('/message', data => {
        this.listenerObserver.next(JSON.parse(data.body));
      });
    });
  }

  unsubscribe() {
    if (this.subscriber !== null) {
      this.subscriber.unsubscribe();
    }
    this.listener = this.createListener();
  }

  private createListener(): Observable<any> {
    return new Observable(observer => {
      this.listenerObserver = observer;
    });
  }

  private createConnection(): Promise<any> {
    return new Promise((resolve, reject) => (this.connectedPromise = resolve));
  }
}