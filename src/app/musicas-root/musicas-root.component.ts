import { MusicasServiceService } from './../shared/musicas-service.service';
import { Musica } from './../Musica';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicas-root',
  templateUrl: './musicas-root.component.html',
  styleUrls: ['./musicas-root.component.css']
})
export class MusicasRootComponent implements OnInit {
  arrayMusicasFiltrado:Musica[] = [];

  constructor(private musicaService: MusicasServiceService) { }

  ngOnInit() {
    this.arrayMusicasFiltrado = this.musicaService.getArray();
  }

  filtro: string = "";
  tipoFiltro: string = "";

  filtros: string[] = [
    'NOME',
    'ALBUM',
    'BANDA'
  ];

  addMusica(nome: string, album:string, banda:string){
    let toAdd: Musica;

    toAdd.nome = nome;
    toAdd.album = album;
    toAdd.banda = banda;

    this.musicaService.addMusica(toAdd);
  }

  aplicaFiltro(){
    console.log(this.filtro);
    let arrayInicial:Musica[] = this.musicaService.getArray();
    this.arrayMusicasFiltrado = [];

    if(this.filtro!=''){
      for(let musica of arrayInicial){
        if(this.tipoFiltro.toLowerCase()=="nome" && musica.nome.toLowerCase().includes(this.filtro))
          this.arrayMusicasFiltrado.push(musica);
        if(this.tipoFiltro.toLowerCase()=="album" && musica.album.toLowerCase().includes(this.filtro))
          this.arrayMusicasFiltrado.push(musica);
        if(this.tipoFiltro.toLowerCase()=="banda" && musica.banda.toLowerCase().includes(this.filtro))
          this.arrayMusicasFiltrado.push(musica);
      }
    }else{
      this.arrayMusicasFiltrado = arrayInicial;
    }
  }

  getElementById(id:string){
    
    

  }
}
