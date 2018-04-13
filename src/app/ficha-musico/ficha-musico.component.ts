import { ActivatedRoute } from '@angular/router';
import { MusicoService } from './../shared/musico.service';
import { Component, OnInit } from '@angular/core';
import { Musico } from '../Musica';

@Component({
  selector: 'app-ficha-musico',
  templateUrl: './ficha-musico.component.html',
  styleUrls: ['./ficha-musico.component.css']
})
export class FichaMusicoComponent implements OnInit {

  musico: Musico;

  constructor( private route: ActivatedRoute, private musicoService: MusicoService ) { }

  ngOnInit() {
  }

}
