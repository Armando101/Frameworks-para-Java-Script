import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public text = '';

  constructor(
    private chat: ChatService
  ) { }

  ngOnInit(): void {
  }

  send(): void {
    this.chat.sendMessage(this.text);
    this.text = '';
  }

}
