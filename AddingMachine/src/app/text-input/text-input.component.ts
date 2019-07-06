import { Component, OnInit } from '@angular/core';
import { Evaluator } from '../../../evaluator';


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

  answer: string = ""; 
  evaluator : Evaluator = new Evaluator()

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
  
  doCalculations(val: string) {
    this.answer += ">" + val + "\n";
    this.answer += ">>" + this.evaluator.calcs(val) + "\n"
  }
  
}
