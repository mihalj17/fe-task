import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private ws!: WebSocket;

  constructor() { 
    this.connect();
  }

  private connect(): void {
    this.ws = new WebSocket('ws://localhost:8080');
  }

  sendMessage(message: string): void {
    this.ws.send(message);
  }

  getMessage(): Observable<MessageEvent> {
    return new Observable<MessageEvent>((observer) => {
      this.ws.addEventListener('message', (event) => {
        observer.next(event);
      });
    });
  }
}
