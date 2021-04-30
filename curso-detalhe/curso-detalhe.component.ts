import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  nomeFaculdade: string;
  cursos: string[] = ['ADS','ADS','CIC', 'SI','ADS'];

  constructor() {
    this.nomeFaculdade = 'Centro Universitário';
  }

  ngOnInit(): void {
  }

}
