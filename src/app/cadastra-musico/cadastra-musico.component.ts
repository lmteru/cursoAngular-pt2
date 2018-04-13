import { HttpModule, Http } from '@angular/http';
import { Musica, Musico } from './../Musica';
import { MusicasServiceService } from './../shared/musicas-service.service';
import { MusicoService } from './../shared/musico.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map' //import do map, tem que ser feito na mão

@Component({
  selector: 'app-cadastra-musico',
  templateUrl: './cadastra-musico.component.html',
  styleUrls: ['./cadastra-musico.component.css']
})
export class CadastraMusicoComponent implements OnInit {

  nomeMusico: string;
  dataNascimentoMusico: string;
  musicaSelected: string;

  arrayMusicas: string [] = [];

  constructor(private musicoService: MusicoService, private musicaService: MusicasServiceService, private http: Http) { }

  ngOnInit() {
    console.log("iniciei");
    let arrayAux: Musica[] = [];
    arrayAux = this.musicaService.getArray();

    for(let musica of arrayAux)
      this.arrayMusicas.push(musica.nome);
  }

  submit(formResult){
    console.log(formResult);
    let musicaFound: Musica;

    musicaFound = this.musicaService.getMusicaByName(formResult.musicaSelected);

    let musicoToAdd: Musico = {
      nome: formResult.nomeMusico,
      dataNascimento: formResult.dataNascimentoMusico,
      musica: musicaFound
     }
    console.log(musicoToAdd);
    this.musicoService.incluir(musicoToAdd);

    //postar no servidor
    //http com stringfy json pesquisar
    //metodologia agile, metodologia ageis, devops
    //carlos dias cintia
  }


  //CADASTRA CEP
  pesquisacep(valor, formCep) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

          this.http.get("//viacep.com.br/ws/"+ cep +"/json/ ")
          .map( m=> m.json())
          .subscribe( param => {
            // formCep.value.logradouro = param.logradouro;
            formCep.setValue({
              logradouroFld: param.logradouro,
              bairroFld: param.bairro,
              ufFld: param.uf,
              localidadeFld: param.localidade
            });
            console.log(param);
          });
        } //end if.
        else {
            //cep é inválido.
            alert("Formato de CEP inválido.");
        }
    } //end if.
  };

  //Pega IP
  pesquisaIP(formulario){
    console.log("1111");
    this.http.get("http://ip-api.com/json/")
    .map( m=> m.json() )
    .subscribe( param => {
      formulario.setValue({
         paisFld: param.country,
      });
      console.log(param);
    });

  }

}
