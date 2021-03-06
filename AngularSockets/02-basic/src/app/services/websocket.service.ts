import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user: User;

  constructor(
    private socket: Socket,
    private router: Router
  ) {
    this.loadStorage();
    this.checkStatus();
  }

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.loadStorage();
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

  logoutWS(): void {
    this.user = null;
    localStorage.removeItem('user');
    const payload = { name: 'none' };
    this.emit('config-user', payload, () => {});
    this.router.navigateByUrl('');
  }

  getUser(): User {
    return this.user;
  }

  saveStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage(): void {
    const user: string = localStorage.getItem('user');

    if (user) {
      this.user = JSON.parse(user);
      this.loginWS(this.user.name);
    }
  }
}
