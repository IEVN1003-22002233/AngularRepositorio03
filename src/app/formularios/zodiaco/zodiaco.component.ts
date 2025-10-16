import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Zodiaco } from './zodiaco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})

export class ZodiacoComponent {
  formulario!:FormGroup;
  resultado!:string;
  url!:string;
  valor = new Zodiaco ();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      nombre: new FormControl(''),
      apellidoM: new FormControl(''),
      apellidoP: new FormControl(''),
      genero: new FormControl('')
    });
  }

  calcularSigno():void{
    this.valor.dia = +this.formulario.value.dia;
    this.valor.mes = +this.formulario.value.mes;
    this.valor.anio = +this.formulario.value.anio;
    this.valor.nombre = this.formulario.value.nombre;
    this.valor.apellidoM = this.formulario.value.apellidoM;
    this.valor.apellidoP = this.formulario.value.apellidoP;

    this.resultado = this.valor.obtenerDatos().texto;
    this.url = this.valor.obtenerDatos().url;
}
}
