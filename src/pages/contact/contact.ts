import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SecondPage} from './../second/second'
import {DetailPage} from './../detail/detail'
import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions';
//import {ImportData} from './nuevoImport'

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    // VARIABLE A CAMBIAR COLOCADA DENTRO DEL TEMPLATE CONTACT.HTML PARA SER USADO EN pruebaInput
    varInput = "Dato cargado hacia contact desde home";
    //  datosImport: ImportData;

    constructor(public navCtrl: NavController, public nativePageTransitions: NativePageTransitions) {
        //      this.datosImport = new ImportData('cadena');
        //      this.datosImport.presentarMensaje();
    }

    navSegunda(): void {
        let options: NativeTransitionOptions = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.flip(options).then(function () {console.log("APROVADO")}).catch(function (error) {console.log("ERROR " + error)});
        this.navCtrl.push(SecondPage, {}, options);
//        this.navCtrl.push(SecondPage,{}, {
//        direction: 'up', // default for push is 'forward'
//        duration: 2000, // 2 seconds
//        easing: 'ease-out' // fade-in, fade-out
//        });;
    }
    
    navTercer(){
        this.navCtrl.push(DetailPage);
    }

}
