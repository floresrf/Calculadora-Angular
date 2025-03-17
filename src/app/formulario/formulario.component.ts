import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  title: string = "Aplicación Calculadora";

  val1: number = 0;
  val2: number = 0;

  @Output() resultadoPadre = new EventEmitter<number>();

  calcularBtn(){
    const resultado = this.val1 + this.val2;    
    this.resultadoPadre.emit(resultado);
  }
}
