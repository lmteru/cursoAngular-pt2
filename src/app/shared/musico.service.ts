import { Injectable } from '@angular/core';
import { Musico } from '../Musica';

@Injectable()
export class MusicoService {

  arrayMusico: Musico[] = [];

  constructor() { }

  incluir(musico: Musico){
    this.arrayMusico.push(musico);
  }

  getArray(){
    return this.arrayMusico;
  }

  getMusicoByName(nome:string):Musico{
    let musicoFound:Musico;
    let arrayAux:string [] = [];

    for(let musico of this.arrayMusico)
      arrayAux.push(musico.nome);

    musicoFound = this.arrayMusico[arrayAux.indexOf(nome)];
    
    return musicoFound;
  }

}
