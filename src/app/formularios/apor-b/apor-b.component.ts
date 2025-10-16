import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AporB } from './AporB';

@Component({
  selector: 'app-apor-b',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  formulario!:FormGroup;
  resultado!:number;
  valor = new AporB ();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(0),
      b: new FormControl(0),
    });
  }

  numeros():void{
    this.valor.a = this.formulario.value.a;
    this.valor.b = this.formulario.value.b;

    this.resultado = this.valor.calcular();
  }
}
