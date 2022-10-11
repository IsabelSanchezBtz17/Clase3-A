import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

enum PAISES{
 'MEXICO',
 'PERU',
 'VENEZUELA'
}

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss'],
})

export class UnoComponent implements OnInit, AfterViewInit{
  
  @ViewChild("texto", {static:true}) etiqueta!: ElementRef;
  @ViewChild("texto2", {static:true}) etiqueta2!: ElementRef;
  public PAISES= PAISES;
  public flag : boolean = true;
  public paises: any[]= [
    {
      id: '93',
      nombre:'México'
    },
    {
      id: '34',
      nombre:'Perú'
    },
    {
      id: '23',
      nombre:'Venezuela'
    }
  ]; 

   public platillos: any[] = [
    {
      platillo: 'Tacos',
      pais: PAISES.MEXICO
    },

    {
      platillo: 'Pambazos',
      pais: PAISES.MEXICO
    },

    {
      platillo: 'Pachamanca',
      pais: PAISES.PERU
    },

    {
      platillo: 'Ceviche',
      pais: PAISES.PERU
    },
   
    {
      platillo: 'Arepa',
      pais: PAISES.VENEZUELA
    },

    {
      platillo: 'Hallaca',
      pais: PAISES.VENEZUELA
    },

  ]




  constructor(private renders: Renderer2) { 

  }
  ngAfterViewInit(): void {
    this.ocultar();
    console.log(this.etiqueta);
    this.renders.setAttribute(this.etiqueta.nativeElement, "id", 'cargando');
    this.renders.setStyle(this.etiqueta.nativeElement,"color", "red"),
    this.renders.setAttribute(this.etiqueta2.nativeElement, "id", 'cargando2');
    this.renders.setStyle(this.etiqueta2.nativeElement,"color", "blue"),
    console.log(this.etiqueta);
  }



  ngOnInit(): void {

  }

  public ocultar(){
    let boton = document.getElementById("b");
    boton?.addEventListener("click", ()=>{
      this.flag=!this.flag;
    })
  }


}
