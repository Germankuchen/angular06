import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamanio + 'px'}">
      Hola mundo esto es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio = 15;

  constructor() { }

  ngOnInit() {
  }

}
