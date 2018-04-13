import { Injectable } from '@angular/core';
import { Musica } from '../Musica';

@Injectable()
export class MusicasServiceService {

  constructor() { }


  arrayMusicas:Musica[] = [
    {
      nome: "We drink your blood",
      album: "Blood of the Saints",
      id: 0,
      banda: "Powerwolf"
    },
    {
      nome: "In the Army Now",
      album: "In the Army Now",
      id: 1,
      banda: "Sabaton"
    },
    {
      nome: "Engel",
      album: "Sehnsucht",
      id: 2,
      banda: "Rammstein"
    },
    {
      nome: "Revelations",
      album: "Piece of Mind",
      id: 3,
      banda: "Iron Maiden"
    },
    {
      nome: "Cirice",
      album: "Meliora",
      id: 4,
      banda: "Ghost"
    },
    {
      nome: "Freak on a Leash",
      album: "Unpluged",
      id: 5,
      banda: "Korn"
    },
    {
      nome: "Liam",
      album: "Kein Blick Zurück",
      id: 6,
      banda: "In Extremo"
    },
    {
      nome: "Mensch",
      album: "Olympia",
      id: 7,
      banda: "Ost+Front"
    },
    {
      nome: "Augen Auf!",
      album: "Wahrheit Oder Pflicht",
      id: 8,
      banda: "Oomph!"
    }
  ];

  addMusica(toAdd: Musica){
    toAdd.id = this.arrayMusicas[this.arrayMusicas.length].id + 1;

    this.arrayMusicas.push(toAdd);
  }

  getArray(){
    return this.arrayMusicas;
  }

  getMusicaById(id: number): Musica{
    let arrayAux:number [] = [];
    for(let time of this.arrayMusicas){
      arrayAux.push(time.id);
    }

    return this.arrayMusicas[arrayAux.indexOf(id)];
  }

  getMusicaByName(name: string){
    let arrayAux: string [] = [];

    for(let musica of this.arrayMusicas)
      arrayAux.push(musica.nome);

    return this.arrayMusicas[arrayAux.indexOf(name)];
  }

}
