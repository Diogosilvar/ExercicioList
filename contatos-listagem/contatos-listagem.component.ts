import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

   contatos = [
     { id:1, nome:'Gabriel Arcanjo'},
     { id:2, nome:'Marlon Branco'},
     { id:3, nome:'Lohanna'},
     { id:4, nome:'Libio'},
     { id:4, nome:'Lixxxxbio'}

   ];

   nomedoapp = 'Angular com Template';
  constructor() { }

  ngOnInit(): void {
  }

}
