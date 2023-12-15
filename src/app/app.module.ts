import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GatewayService } from './services/gateway.service';
import { DemoServicesComponent } from './demo/demo-services/demo-services.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GatewayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
