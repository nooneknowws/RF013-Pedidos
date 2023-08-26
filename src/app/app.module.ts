import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PedidosModule } from './pedidos/pedidos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PedidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
