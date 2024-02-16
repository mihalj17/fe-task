import { Component } from '@angular/core';
import { WebSocketService } from '../service/api/WebSocket/web-socket.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  message: string = '';
  messages: string[] = [];

  constructor(private websocketService: WebSocketService) {}

  ngOnInit(): void {
    this.websocketService.getMessage().subscribe((event) => {
      this.convertBlobToText(event.data);
    });
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.websocketService.sendMessage(this.message);
      this.messages.push(this.message);
      this.message = '';
    }
  }
  convertBlobToText(blob: Blob): void {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      this.messages.push(text);
    };
    reader.readAsText(blob);
  }

}
