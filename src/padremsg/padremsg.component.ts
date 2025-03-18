import { Component, ViewChild } from '@angular/core';
import { HijomsgComponent } from '../hijomsg/hijomsg.component';

@Component({
  selector: 'app-padremsg',
  imports: [HijomsgComponent],
  templateUrl: './padremsg.component.html',
  styleUrl: './padremsg.component.css'
})
export class PadremsgComponent {

  @ViewChild(HijomsgComponent) hijo!: HijomsgComponent;

  ngAfterViewInit() {
    this.hijo.cambiarMensaje("Nuevo mensaje desde el padre");
  }

  actualizarMensajeHijo() {
    this.hijo.cambiarMensaje("Mensaje cambiado por el padre!");
  }
}
