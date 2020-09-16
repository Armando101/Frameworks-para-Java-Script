import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public activeUsers$: Observable<any>;

  constructor(
    public chat: ChatService
  ) { }

  ngOnInit(): void {
    this.activeUsers$ = this.chat.getActiveUsers();

    // Emitir obtener users
    this.chat.emitUsers();
  }

}
