import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  public mensaje = '';
  public elemento: any;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.chatService.cargarMensajes()
    .subscribe( () => {
      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje(): void {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
      .then(() => { console.log('Mensaje enviado'); this.mensaje = ''; })
      .catch( (err) => console.error('Error al enviar', err));
  }

}
