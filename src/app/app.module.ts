import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HammerModule } from '@angular/platform-browser';
import { GetdataService } from './services/getdata.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HammerModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GetdataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
