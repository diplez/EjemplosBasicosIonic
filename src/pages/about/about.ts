import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatWidget} from './inyectable/chat-Widget';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  datoPasaInyectable = this.chatWidget.chatSocket.encryption;
  datoStringInyectable = this.chatWidget.authWidget.datoString;
  //dato = ChatWidget.authWidget.dato;

  constructor(public navCtrl: NavController,private chatWidget: ChatWidget) {

  }

}
