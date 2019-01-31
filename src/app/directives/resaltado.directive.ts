import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color: string;

  constructor(private referencia: ElementRef) {
    console.log('Esta usando la directiva');
   // referencia.nativeElement.style.backgroundColor = 'Yellow';
   }

  @HostListener('mouseenter') entro() {
    console.log('Color ' + this.color);
    this.colorear(this.color);
  }

  @HostListener('mouseleave') salio() {
    this.referencia.nativeElement.style.backgroundColor = null;
  }

  private colorear(color: string) {
    console.log(color);
    this.referencia.nativeElement.style.backgroundColor = color;
  }


}
