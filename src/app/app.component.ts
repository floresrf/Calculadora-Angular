import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { ResultadoComponent } from './resultado/resultado.component';

@Component({
  selector: 'app-root',
  imports: [FormularioComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora-Angular';
  
  resultado: number = 0;

  recibirResultado(resultado: number){
    this.resultado = resultado;
  }
}
