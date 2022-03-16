import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  input: string = '';
  result: string = '566';

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

  constructor() {}

  ngOnInit() {}
}
