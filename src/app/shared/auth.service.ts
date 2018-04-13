import { Router } from '@angular/router';
import { User } from './../User';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  isAuth: boolean = false;
  showNav = new EventEmitter<boolean>();

  constructor( private router: Router ) { }

  fazerLogin( usuario: User) {
    console.log('passei pelo login');
    if(usuario.login=='lala' && usuario.senha=='dobrinhas'){
      this.isAuth = true;
      this.showNav.emit(this.isAuth);
      this.router.navigate(['/ListaCompleta']);
    }
    else{
      this.isAuth = false;
      this.showNav.emit(this.isAuth);
    }
  }

}
