import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { InputPage} from '../pages/contact/pruebaInput';
import { ImportData } from '../pages/contact/nuevoImport';
import {SecondPage} from '../pages/second/second';
import { DetailPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ChatWidget, AuthService, AuthWidget, ChatSocket} from './../pages/about/inyectable/index';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InputPage,
    ImportData,
    SecondPage,
      DetailPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // COMPONENTE IMPORTADO PARA ANIMACIONES
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InputPage,
    ImportData,
    SecondPage,
    DetailPage
  ],
  providers: [
    ChatWidget, 
    AuthService, 
    AuthWidget, 
    ChatSocket,
    StatusBar,
    SplashScreen,
    NativePageTransitions,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
