import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OnInit} from '@angular/core';
import * as $ from 'jquery';

//declare var jquery:any;  //opcional para jquery
declare var $: any;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit { //OnInit SE INICIALIZA AL ABRIR PAGINA

    @Input() datoInputDecorador: string;
    
    public variableGlabal: string;
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

    constructor(public navCtrl: NavController) {
        this.metodoUsandoJqueryJS(); // SE INICIALIZA METODO EN CONSTRUCTOR PARA EJECUCION DIRECTA
        this.variableGlabal = "";
    }

    // SE INICIA AL ABRIR PAGINA USADO MAS PARA PROCESOS GRANDES
    // MAS ACERCA DE ESTOS METODOS EN DOCUMENTACION
    ngOnInit(): void {
        console.log("Metodo ngOnInit SE CARGA AL EJECUTAR PAGINA CON MENSAJE DE INPUT DECORADOR: ");
    }

    metodoVacioSinParametros(): void {
        console.log("prueba Metodo Vacio sin recibir parametros");
    }

    metodoVacioConParamentros(parametroEntrada: any, datoString: string): void {
        // LOS PARAMETROS DE ENTRADA DESDE HTML EN ANY SON TOMADOS CON JAVASCRIPT            
        // SE PUEDE ENVIAR DIRECTO LA VARIABLE COMPLETA QUE REPRESENTA A LA ETIQUETA HTML (click)="metodoVacioConParamentros(mensajeH2); <h2 #mensajeH2>
        // O SE PUEDE ENVIAR UN ATRIBUTO DE LA ETIQUETA (click)="metodoVacioConParamentros(mensajeH2.id); <h2 #mensajeH2>        
        console.log("prueba Metodo Vacio sin recibir parametros" + "___" + parametroEntrada.innerText + "___Variable String:  " + datoString + "   ____ " + this.variableGlabal);

    }

    // METODO DE RETORNO CON VARIABLE NUMERO Y VARIABLE OPCIONAL
    metodoRetornoConParametros(parametroNumero: number, parametroOpcional?: number): any {
        var datoString = ""
        if (parametroNumero > 0 || parametroOpcional != 0) {
            datoString = "HA LLEGADO CORRECTAMENTE EL VALOR NUMERICO O VALOR OPCIONAL"
        }
        //console.log("prueba Metodo Vacio sin recibir parametros");
        return datoString;
    }

    metodoUsandoJqueryJS(): void {
        //import * as $ from 'jquery';
        //Dependencias usadas 
        //declare var jquery:any;  //opcional para jquery
        //declare var $: any;                

        //NO SE PUEDE MEZCLAR VARIBLES DE TS EN JS        
        console.log(this.variableGlabal) // SALDRA SIN VALOR EL METODO PORQ AL INICIAR NO SE E ASGNA UN VALOR AL IGUAL QUE NO CAMBIARA PORQ EL METODO SE EJECUTO ANTES QUE LLAMADA DE DATOS
        var variableJS = this.variableGlabal;
        $(function () {
            $('#mensajeH2').on('click', function () {
                console.log("VALOR DEL METODO RETORNO  " + variableJS);
            });
        })
    }

    // METODO LLAMADA PARA EVENTO MOUSE OVER
    ratonSobre(div: string) {
        this.variableGlabal = this.metodoRetornoConParametros(1, 0);
        console.log("mouse enter : " + div +"   "+this.variableGlabal);
    }


}
