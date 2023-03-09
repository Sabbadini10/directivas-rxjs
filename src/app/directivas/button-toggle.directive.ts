import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonToggle]'
})
export class ButtonToggleDirective implements OnInit{

  constructor(private el: ElementRef<HTMLButtonElement>) { }

@Input()
bgColor="gray"

@Input()
textColor="white"

@Input()
width="100%"

ngOnInit(){
  this.setColor();
  this.setWidth();
}

  setColor(){
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.textColor;
    this.el.nativeElement.style.border = 'none';

  }
  setWidth(){
    this.el.nativeElement.style.width = `${this.width}`;
    this.el.nativeElement.style.padding = `0.2rem`;
  }
}
