import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { DrinksComponent } from './drinks.component';
import {AppComponent} from '../app.component';

describe('DrinksComponent', () => {
  let component: DrinksComponent;
  let fixture: ComponentFixture<DrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ DrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('there should be 5 drinks', () => {
    expect(component.drinksArray.length).toBe(5);
  });
});
