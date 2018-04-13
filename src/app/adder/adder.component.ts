import { Musica } from './../Musica';
import { MusicasServiceService } from './../shared/musicas-service.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {

  nome="";
  album='';
  banda='';

  constructor(private musicaService:MusicasServiceService) { }

  ngOnInit() {
  }

  adicionarMusica(){
    let toAdd: Musica = {
      nome: this.nome,
      album: this.album,
      banda: this.nome
    };

    this.musicaService.addMusica(toAdd);
    alert("ADICIONEI NOVA ENTRADA");
    console.log(toAdd);
  }

  nomeChange(nome:string){
    this.nome=nome;
  }

}
