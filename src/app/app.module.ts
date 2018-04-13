import { HttpModule } from '@angular/http';
import { MusicoService } from './shared/musico.service';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MusicasRootComponent } from './musicas-root/musicas-root.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TabelaCompletaComponent } from './tabela-completa/tabela-completa.component';
import { MusicasServiceService } from './shared/musicas-service.service';
import { AdderComponent } from './adder/adder.component';
import { FichaMusicaComponent } from './ficha-musica/ficha-musica.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { Erro404Component } from './erro404/erro404.component';
import { TesteFormsComponent } from './teste-forms/teste-forms.component';
import { FichaMusicoComponent } from './ficha-musico/ficha-musico.component';
import { ListaMusicosComponent } from './lista-musicos/lista-musicos.component';
import { CadastraMusicoComponent } from './cadastra-musico/cadastra-musico.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    MusicasRootComponent,
    NavBarComponent,
    HomeComponentComponent,
    TabelaCompletaComponent,
    AdderComponent,
    FichaMusicaComponent,
    NotFoundComponent,
    LoginComponent,
    Erro404Component,
    TesteFormsComponent,
    FichaMusicoComponent,
    ListaMusicosComponent,
    CadastraMusicoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    MusicasServiceService,
    AuthService,
    AuthGuardService,
    MusicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
