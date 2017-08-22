import { Injectable } from '@angular/core';
import {AuthService} from './auth-Service';
import {AuthWidget} from './auth-Widget';
import {ChatSocket} from './chat-Socket';

// DEBERA SER LLAMADO EN PROVIDERS
@Injectable()
export class ChatWidget {
    
  constructor(
    public authService: AuthService,
    public authWidget: AuthWidget,
    public chatSocket: ChatSocket) { }
}
