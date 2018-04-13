import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-forms',
  templateUrl: './teste-forms.component.html',
  styleUrls: ['./teste-forms.component.css']
})
export class TesteFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(sidisi){
    console.log(sidisi);
  }

}
