import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//sicket
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { 
  url: environment.wsUrl, options: {}
 };
  


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { WebsocketService } from './services/websocket.service';
import { FooterComponent } from './components/footer/footer.component';
import { ChatServiceService } from './services/chat-service.service';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [WebsocketService,ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
