import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-button',
  templateUrl: './bar-button.component.html',
  styleUrls: ['./bar-button.component.scss']
})
export class BarButtonComponent implements OnInit {

  @Input('initialNumber')
  initialNumber: Number = 10;

  @Input('initialText')
  initialText: String = 'Pucher';

  constructor() {
  }

  ngOnInit() {
  }


  showNumberText(inputNumber: HTMLInputElement) {
    alert('Schau ummi zum Pucher auf ' + inputNumber.value + ' Bier!');
  }

  showBarText(inputText: HTMLInputElement) {
    if (inputText.value.toLowerCase() === 'pucher') {
      alert('Jawui, hau di ummi!');
    } else {
      alert(inputText.value + ' is gor ka guade wahl! Geh zum Pucher!');
    }

  }
}
