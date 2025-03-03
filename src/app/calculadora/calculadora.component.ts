import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  
  title: string = "Aplicación Calculadora";

  val1: number = 0;
  val2: number = 0;

  res: number = 0;

  calcularBtn(){
    this.res = this.val1 + this.val2;    
  }
}
