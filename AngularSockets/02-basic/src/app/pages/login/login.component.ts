import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name = '';

  constructor(
    public wsService: WebsocketService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.wsService.loginWS(this.name)
      .then( () => {
        this.name = '';
        this.router.navigateByUrl('/messages');
      });
  }
}
