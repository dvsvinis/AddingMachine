import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  public inputText: string;
  public number1: number;
  public number2: number;
  public result: number;
  
  ops : string[];
  vals : number[];

  constructor() { }

  ngOnInit() {
  }

  calculatorAdd() {
    this.result = this.number1 + this.number2;
  }

  calculatorSubtract() {
    this.result = this.number1 - this.number2;
  }

  calculatorMultiply() {
    this.result = this.number1 * this.number2;
  }

  calculatorDivide() {
    this.result = this.number1 / this.number2;
  }
  


  
}
