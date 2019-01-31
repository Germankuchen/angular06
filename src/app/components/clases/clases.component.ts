import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alert = 'alert-danger';
  esDanger = true;
  ejecutandose = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.ejecutandose = true;
    setTimeout(() => {
      this.ejecutandose = false;
    }, 3000);
  }

}
