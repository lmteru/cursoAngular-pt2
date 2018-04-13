import { AuthCanDeactService } from './app/shared/auth-can-deact.service';
import { CadastraMusicoComponent } from './app/cadastra-musico/cadastra-musico.component';
import { FichaMusicoComponent } from './app/ficha-musico/ficha-musico.component';
import { ListaMusicosComponent } from './app/lista-musicos/lista-musicos.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { FichaMusicaComponent } from './app/ficha-musica/ficha-musica.component';
import { MusicasRootComponent } from './app/musicas-root/musicas-root.component';
import { AdderComponent } from './app/adder/adder.component';
import { HomeComponentComponent } from './app/home-component/home-component.component';
import { TabelaCompletaComponent } from './app/tabela-completa/tabela-completa.component';

import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './app/login/login.component';
import { AuthGuardService } from './app/shared/auth-guard.service';
import { Erro404Component } from './app/erro404/erro404.component';
import { TesteFormsComponent } from './app/teste-forms/teste-forms.component';

//com guardas
// const appRoutes: Routes= [
//     {path: 'Login', component: LoginComponent},
//     {path: '', component: HomeComponentComponent, canActivate: [AuthGuardService]},
//     {path: 'ListaCompleta', component: TabelaCompletaComponent, canActivate: [AuthGuardService]},
//     {path: 'AdicionaComponente', component: AdderComponent, canActivate: [AuthGuardService]},
//     {path: 'Filtro', component: MusicasRootComponent, canActivate: [AuthGuardService]},
//     {path: 'MusicaSelecionada/:minhaMusica', component: FichaMusicaComponent, canActivate: [AuthGuardService]},
//     {path: 'MusicNotFound', component: NotFoundComponent, canActivate: [AuthGuardService]},
//     {path: '**', component: Erro404Component, canActivate: [AuthGuardService]}
// ];

//sem rotas
const appRoutes: Routes= [
    {path: 'Login', component: LoginComponent},
    {path: '', component: HomeComponentComponent},
    {path: 'ListaCompleta', component: TabelaCompletaComponent},
    {path: 'AdicionaComponente', component: AdderComponent},
    {path: 'Filtro', component: MusicasRootComponent},
    {path: 'MusicaSelecionada/:minhaMusica', component: FichaMusicaComponent},
    {path: 'MusicNotFound', component: NotFoundComponent},
    {path: 'ListaMusico', component: ListaMusicosComponent},
    {path: 'MusicoSelecionado/:meuMusico', component: FichaMusicoComponent},
    {path: 'AdicionaMusico', component: CadastraMusicoComponent},
    // {path: 'TesteForms', component: TesteFormsComponent, canDeactivate: [AuthCanDeactService]},
    {path: '**', component: Erro404Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});