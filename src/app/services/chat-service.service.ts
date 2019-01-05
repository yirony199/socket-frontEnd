import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable()
export class ChatServiceService {

  constructor(public wsService: WebsocketService) {

  }

  sendMessage(mensaje: string) {
    const payload = {
      de: "FErnado",
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje',payload);

  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }

}
