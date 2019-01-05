import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = "";

  constructor(public wsService: WebsocketService,private router:Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.wsService.loginWS( this.nombre )
    .then( resp=>{
        this.router.navigateByUrl('/mensajes');
    });

  }

}
