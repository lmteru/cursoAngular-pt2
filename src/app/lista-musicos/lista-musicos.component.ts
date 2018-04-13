import { MusicoService } from './../shared/musico.service';
import { Component, OnInit } from '@angular/core';
import { Musico } from '../Musica';

@Component({
  selector: 'app-lista-musicos',
  templateUrl: './lista-musicos.component.html',
  styleUrls: ['./lista-musicos.component.css']
})
export class ListaMusicosComponent implements OnInit {

  arrayMusicos: Musico[] = [];

  constructor( private musicoService: MusicoService ) { }

  ngOnInit() {
    this.arrayMusicos = this.musicoService.getArray();
  }

}
