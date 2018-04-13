import { Musica } from './../Musica';
import { MusicasServiceService } from './../shared/musicas-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-completa',
  templateUrl: './tabela-completa.component.html',
  styleUrls: ['./tabela-completa.component.css']
})
export class TabelaCompletaComponent implements OnInit {

  arrayMusicas:Musica[] = [];
  constructor(private musicaService: MusicasServiceService) { }

  ngOnInit() {
    this.arrayMusicas = this.musicaService.getArray();
  }

}
