import { CanDeactivateService } from './../can-deactivate.service';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
  export class AuthCanDeactService implements CanDeactivate<AuthCanDeactService> {

    constructor( private canDeac: CanDeactivateService ) {}

    showNav = new EventEmitter<boolean>();
      
    canDeactivate(
        component: AuthCanDeactService,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      if(this.canDeac.podeDesativar()){
        this.showNav.emit(true);
        return true;
        
      } 
      else {
        return false;
      }
    }
  }
