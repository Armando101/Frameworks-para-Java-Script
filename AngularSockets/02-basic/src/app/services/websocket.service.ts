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
    this.loadStorage();
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

  loginWS(name: string): Promise<any> {

    return new Promise(( resolve, reject) => {
      this.emit('config-user', { name }, () => {
        this.user = new User(name);
        this.saveStorage();
        resolve();
      });
    });
  }

  getUser(): User {
    return this.user;
  }

  saveStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage(): void {
    const user: string = localStorage.getItem('user');
    // tslint:disable-next-line: no-unused-expression
    user && (this.user = JSON.parse(user));
  }
}
