import { Component } from '@angular/core';

@Component({
  selector: 'app-hijomsg',
  imports: [],
  templateUrl: './hijomsg.component.html',
  styleUrl: './hijomsg.component.css'
})
export class HijomsgComponent {
  mensaje: string = "Mensaje hijo :P"

  cambiarMensaje(nuevoMensaje: string) {
    this.mensaje = nuevoMensaje;
  }
}
