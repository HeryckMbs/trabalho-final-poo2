import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable} from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient,
              private _snackBar: MatSnackBar) { }

    baseUrl = 'http://localhost:8080/academico/alunos';

    openSnackBar(message: string) {
        this._snackBar.open(message, 'X', {
          duration:2000,
          verticalPosition:"top",
          horizontalPosition:"right"
        });
    }

    //Fiz algumas alterações depois da aula.
    //Ao invés de utilizar um valor qualquer (any) decidi colocar o tipo esperado

    //Neste caso em especial teremos um array de Aluno como retorno do método getAlunoList
    //Lembrando que agoar o http teve retornar um tipo definido,
    //assim temos que incluir o tipo também no retorno do método get do HTTPCliente
    getAlunoList():Observable<Aluno[]>{
      return this.httpClient.get<Aluno[]>(`${this.baseUrl}`);
    }

    getAluno(id: number):Observable<Aluno>{
      return this.httpClient.get<Aluno>(`${this.baseUrl}/${id}`);
    }

    createAluno(c: Aluno):Observable<Aluno>{
      return this.httpClient.post<Aluno>(`${this.baseUrl}`,c);
    }

    updateAluno(id: number, c: Aluno):Observable<Aluno>{
      return this.httpClient.put<Aluno>(`${this.baseUrl}/${id}`, c);
    }

    deleteAluno(id: number):Observable<Aluno>{
      return this.httpClient.delete<Aluno>(`${this.baseUrl}/${id}`);
    }

  }
