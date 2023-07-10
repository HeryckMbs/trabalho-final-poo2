import { Component } from '@angular/core';
import { AlunoService } from '../aluno/aluno.service';
import { Aluno } from '../aluno/aluno.model';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../cursos/curso.service';
import { Curso } from '../cursos/curso.model';
import { trigger } from '@angular/animations';
interface sexo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css']
})
export class AlunoEditarComponent {
  Aluno: Aluno = new Aluno();
  selected = new Curso();

  cursos : Curso[] = [];
  sexos: sexo[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Feminino', viewValue: 'Feminino' },
  ];
  constructor(private Alunoservice: AlunoService,
              private cursoService: CursoService,
              private router: Router,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAluno(this.rotaAtiva.snapshot.paramMap.get('id'));

      this.cursoService.getCursoList().subscribe(
        dados => {
          this.cursos = dados;
        },
        error => console.log(error)
      );


  }

  getAluno(id: any) {
        this.Alunoservice.getAluno(id).subscribe(
            dado =>   {
                          this.Aluno = dado;
                          this.selected = dado.curso
                      },
            error =>  {
                          console.log(error);
                      }
        )
  }

  atualizar() {
    console.log('ENVIANDO', this.Aluno)
    this.Aluno.curso = this.cursos.filter(curso => curso.idcurso == this.selected.idcurso)[0];
    this.Alunoservice.updateAluno(this.Aluno.idaluno, this.Aluno).subscribe(
        dado => {
                  this.Alunoservice.openSnackBar('Aluno atualizado !');
                  this.router.navigate(['/alunos']);
                  console.log('RETORNADO',dado);
                },
        error => {
                  console.log(error);
                })
  }

  cancelar() {
      this.router.navigate(['/alunos']);
  }
}
