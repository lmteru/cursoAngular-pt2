import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactivateService {

  constructor() { }

  can: boolean = false;

  podeDesativar(){
    return this.can;
  }

}
