import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name = '';

  constructor(
    public wsService: WebsocketService
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.wsService.loginWS(this.name);
    this.name = '';
  }

}
