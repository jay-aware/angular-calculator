import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  input:string = "5+65";
  result:string = "566";


  constructor() { }

  ngOnInit() {
  }

}