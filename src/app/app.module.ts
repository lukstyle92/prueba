import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// servicios

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CallbackComponent } from './callback/callback.component';
import { RecetaTarjetaComponent } from './components/receta-tarjeta/receta-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    CallbackComponent,
    RecetaTarjetaComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, APP_ROUTING],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
