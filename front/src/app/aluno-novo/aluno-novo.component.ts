import { AlunoService } from '../aluno/aluno.service';
import { Aluno } from '../aluno/aluno.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../cursos/curso.model';
import { CursoService } from '../cursos/curso.service';
import { Observable } from 'rxjs/internal/Observable';

interface sexo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})



export class AlunoNovoComponent {

  Aluno: Aluno = new Aluno();
  sexos: sexo[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Feminino', viewValue: 'Feminino' },
  ];

  cursos : Curso[] = [];


  constructor(private AlunoService: AlunoService,private cursoService: CursoService,
    private router: Router) { }

  ngOnInit(): void {

    this.cursoService.getCursoList().subscribe(
      dados => {
        this.cursos = dados;
      },
      error => console.log(error)
    );
  }


  salvar() {
    console.log(this.Aluno)
     this.AlunoService.createAluno(this.Aluno).subscribe(
      dado => {
        console.log('RETORNADO',dado);
        this.AlunoService.openSnackBar('Aluno criado com sucesso !');
                this.router.navigate(['/alunos']);
              }
    )
  }

  cancelar() {
    this.router.navigate(['/alunos']);
  }
}
