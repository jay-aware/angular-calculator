import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  input: string = '';
  result: string = '';

  allClear() {
    this.input = '';
    this.result = '';
  }

  clear() {
    if (this.input != '') {
      this.input = this.input.substr(0, this.input.length - 1);
    }
  }

  pressNum(num: string) {
    if (num == "0") {
      if(this.input==""){
        return;
      }

      const prevKey = this.input[this.input.length-1];
      if (prevKey === '/' || prevKey === '*' || prevKey === "-" || prevKey === "+") {
        return;
      }
    }

    this.input = this.input + num;
  }

  pressOp(op: string) {
    const lastKey = this.input[this.input.length -1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.input = this.input + op;
    this.calcAns();
  }

  calcAns() {
    let formula = this.input;
    let lastKey = formula[formula.length-1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      formula = formula.substr(0, formula.length-1);
    }

    this.result = eval(formula);
    console.log(formula);
    console.log(this.result);
  }

  getAns() {
    this.calcAns();
    this.input = this.result;
    if (this.input == "0") this.input ='';
    this.input = ""
  }

  constructor() {}

  ngOnInit() {}
}
