import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno'

@Component({
    selector: 'app-aluno-list',
    templateUrl: './aluno-list.component.html',
})

export class AlunoListComponent implements OnInit {
    alunos: Aluno[]=[];
    ngOnInit() :void { 
        this.alunos=[
            {
                id: 1,
                nome: "Maria da Silva",
                curso: "Administração",
                faculdade: "Universo",
            },
            {
                id: 2,
                nome: "Joaquim Lisboa",
                curso: "Engenharia Química",
                faculdade: "Estácio",
            },
            {
                id: 3,
                nome: "Mercedes Lucrecia",
                curso: "Engenharia Cívil",
                faculdade: "UNI-BH",
            },
            {
                id: 4,
                nome: "Genoveva Andrade",
                curso: "Sistemas de informação",
                faculdade: "Universo",
            },
            {
                id: 5,
                nome: "Jucicleide Amaril",
                curso: "Educação Fisíca",
                faculdade: "UNI-BH",
            },
            {
                id: 6,
                nome: "Maria Privada de Jesus",
                curso: "Nutrição",
                faculdade: "CMMG",
            },
            
        ]
    }
}
