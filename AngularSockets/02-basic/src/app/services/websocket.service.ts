import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user: User;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: () => void): void {

    this.socket.emit(event, payload, callback);

  }

  listen(event: string): Observable<unknown> {
    return this.socket.fromEvent(event);
  }

  loginWS(name: string): void {
    console.log('configurando user: ', name);
    this.emit('config-user', { name }, console.log);
  }
}
