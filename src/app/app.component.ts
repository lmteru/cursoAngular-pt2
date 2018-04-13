import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isNav: boolean = false;

constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.showNav.subscribe(
      n => (this.isNav = n)
    );
  }
}
