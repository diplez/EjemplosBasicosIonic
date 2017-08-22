import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//@Component({
//  selector: 'page-detail',
//  templateUrl: 'detail.html',
//})
 
 @Component({
  selector: 'page-detail',
  styles: [`
    .toggle-container {
      background-color:white;
      border:10px solid black;
      width:200px;
      text-align:center;
      line-height:100px;
      font-size:50px;
      box-sizing:border-box;
      overflow:hidden;
    }
  `],
  animations: [trigger(
      'openClose',
      [
        state('ocultar, void', style({height: '0px', color: 'maroon', borderColor: 'maroon'})),
        state('expandir', style({height: '*', borderColor: 'green', color: 'green'})),
        transition(
            'ocultar <=> expandir', [animate(500, style({height: '250px'})), animate(500)])
      ])],
    templateUrl: 'detail.html'     
})
 
//export class DetailPage {
//
//  constructor(public navCtrl: NavController, public navParams: NavParams) {
//  }
//
//  ionViewDidLoad() {
//    console.log('ionViewDidLoad DetailPage');
//  }
//
//}

export class DetailPage {
  stateExpression: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   }
  
  
//  constructor() { this.collapse(); }
  
  expand() { this.stateExpression = 'expandir'; }
  collapse() { this.stateExpression = 'ocultar'; }
}

