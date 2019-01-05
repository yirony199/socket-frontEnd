import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public wsService: WebsocketService,
    public chatServiceService: ChatServiceService) {

  }

  ngOnInit() {

    this.chatServiceService.getMessagesPrivate().subscribe(msg => {
      console.log(msg);
    });
    
  }


}
