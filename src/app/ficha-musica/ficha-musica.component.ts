import { Musica } from './../Musica';
import { MusicasServiceService } from './../shared/musicas-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-musica',
  templateUrl: './ficha-musica.component.html',
  styleUrls: ['./ficha-musica.component.css']
})
export class FichaMusicaComponent implements OnInit {

  sub: Subscription;
  id: string;
  musica: Musica;

  constructor( private route: ActivatedRoute, private musicaService: MusicasServiceService ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {  
      this.id = params['minhaMusica'];
    });

    this.musica = this.musicaService.getMusicaById(Number(this.id));
  }



  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
