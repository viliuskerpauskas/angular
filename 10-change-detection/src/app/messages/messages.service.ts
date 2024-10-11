import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  //   private messages = signal<string[]>([]);
  //   allMessages = this.messages.asReadonly();
  messages$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = [];
  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    // this.messages.update((prevMessages) => [...prevMessages, message]);
    this.messages = [...this.messages, message];
    this.messages$.next([...this.messages]);
  }
}
