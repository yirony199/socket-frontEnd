import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto: string = "";
  mensajesSubscription: Subscription;
  mensajes: any[] = [];
  element: HTMLElement;

  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
    this.element = document.getElementById("chat-mensajes");
     this.chatService.getMessages().subscribe(msg => {
    // this.mensajesSubscription = this.chatService.getMessages().subscribe(msg => {
      console.log(msg);
      this.mensajes.push(msg);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy() {
    //this.mensajesSubscription.unsubscribe();
  }


  enviar() {
    
    if (this.texto.trim().length == 0) {
      return;
    }
    this.chatService.sendMessage(this.texto);
    this.texto = "";

  }



}
