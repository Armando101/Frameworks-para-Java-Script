import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public text = '';
  public messageSubscription: Subscription;
  public element: HTMLElement;
  public messages: any[] = [];

  constructor(
    private chat: ChatService
  ) { }

  ngOnInit(): void {
    this.element = document.getElementById('chat-message');
    this.messageSubscription = this.chat.getMessages().subscribe(msg => {
      this.messages.push(msg);

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);

    });
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  send(): void {
    // tslint:disable-next-line: no-unused-expression
    this.text.trim().length === 0 || this.chat.sendMessage(this.text);
    this.text = '';
  }

}
