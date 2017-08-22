import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'import',
  template: '<h1>Valor de IMPORT</h1>', // VALOR A SER RECIBIDO DESDE PADRE CONTACT.TS
  styles:['h1{color:blue}']
  
})
export class ImportData {  
  
  // CONSTRUCTOR CON PARAMETRO
  constructor(public navCtrl: NavController) {
      console.log("CLASE IMPORTADA DESDE CONSTRUCTOR");
  }
    
    // CONSTRUCTOR CON PARAMETRO Y SIN PARAMETRO
//    constructor(cadena?: string) {
//        console.log("CLASE IMPORTADA DESDE CONSTRUCTOR  " + cadena);
//  }
  
  public presentarMensaje() :void{
      console.log("METODO LLAMADO DESDE CLASE IMPORTADA");
  }

}


