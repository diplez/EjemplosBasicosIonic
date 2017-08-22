import { Component ,Input} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'message',
  template: '<h1>Valor pasado por @input<br/>{{datoInputDecorador1}}</h1>', // VALOR A SER RECIBIDO DESDE PADRE CONTACT.TS
  styles:['h1{color:red}']
  
})
export class InputPage {

  // DECORADOR CREADO PARA SER EDITADO DESDE EL COMPONENTE PADRE
  @Input() datoInputDecorador1: string;  

  constructor(public navCtrl: NavController) {
      //console.log(this.varInputHome);
  }

}
