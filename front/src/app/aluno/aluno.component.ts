import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';

import { AlunoService } from './aluno.service';
import { Aluno } from './aluno.model';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  Aluno: Aluno = new Aluno();

  AlunoDataSource: MatTableDataSource<Aluno> = new MatTableDataSource();

  displayedAlunos: String[] = ['idaluno', 'nome', 'update', 'delete'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private AlunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.getAlunoList();
  }

  getAlunoList() {

    this.AlunoService.getAlunoList().subscribe(
        dados => {
          console.log(dados)
          this.AlunoDataSource = new MatTableDataSource<Aluno>(dados as Aluno[]);
          this.AlunoDataSource.paginator = this.paginator;
          this.AlunoDataSource.sort = this.sort;
        },
        error => console.log(error)
      );
  }

  filtrarAlunos(event: Event) {
    let valor = (event.target as HTMLInputElement).value;
    this.AlunoDataSource.filter = valor;
  }

  deletarAluno(delAluno : Aluno){
    this.AlunoService.deleteAluno(delAluno.idaluno).subscribe(
      dados => {
        this.AlunoService.openSnackBar('Aluno excluído !');
        this.getAlunoList();
      }
    )
  }

  navigateToAlunoNovo() {
    this.router.navigate(['/aluno-novo']);
  }

  navigateToAlunoEditar(Aluno: Aluno) {
    this.router.navigate([`/aluno-editar/${Aluno.idaluno}`]);
  }
}
