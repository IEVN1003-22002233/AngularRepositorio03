import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!:FormGroup;
  resultado!:number;
  puntos = new Distancia();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),
    });
  }
  multNumeros():void{

    this.puntos.x1 = this.formulario.value.x1;
    this.puntos.y1 = this.formulario.value.y1;
    this.puntos.x2 = this.formulario.value.x2;
    this.puntos.y2 = this.formulario.value.y2;

    this.resultado = this.puntos.calcular();
  }
}
