import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDinamyColor]'
})
export class DinamyColorDirective implements OnInit{

  @Input ('appDinamyColor') color: string= '';
  colorEnter: string='';
  @Input ('SizeEnter') SizeEnter: string='';

  
  @HostListener('mouseleave') mouseleave(){
    console.log("this");
    this.element.nativeElement.style.color= this.color
  }

  @HostListener('mouseenter') mouseEnter(){
    console.log("this");
    this.element.nativeElement.style.color= this.colorEnter
  }

  @HostListener('click') mouseClick(){
    console.log("this");
    this.element.nativeElement.style.fontSize= this.SizeEnter
  }
  constructor(private element: ElementRef) { 

  }

  ngOnInit(): void {
    console.log(this.color);
    console.log(this.element.nativeElement);
    this.colorEnter= this.element.nativeElement.style.color
  }
  
}
