import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private wsService: WebsocketService
  ) { }

  sendMessage(message: string): void {
    const payload = {
      from: this.wsService.getUser().name,
      body: message
    };
    this.wsService.emit('message', payload);
  }

  getMessages(): Observable<unknown> {
    // Escucho todos los eventos de tipo new-message que vengan del servidor
    return this.wsService.listen('new-message');
  }
}
