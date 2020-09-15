import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public text = '';
  public messageSubscription: Subscription;

  constructor(
    private chat: ChatService
  ) { }

  ngOnInit(): void {
    this.messageSubscription = this.chat.getMessages().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  send(): void {
    this.chat.sendMessage(this.text);
    this.text = '';
  }

}
