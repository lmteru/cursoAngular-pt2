import { ActivatedRoute } from '@angular/router';
import { User } from './../User';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:string;
  senha:string;
  
  constructor(private loginAuth: AuthService, private router: ActivatedRoute) {}

  doLogin(){
    let usuario: User ={
      login: this.login,
      senha: this.senha
    };

    this.loginAuth.fazerLogin(usuario);
  }

  ngOnInit() {
  }

}
