import { Curso } from "../cursos/curso.model";

export class Aluno{
  idaluno !: number;
  dt_nasc !: Date;
  nome !: string;
  sexo !: string;
  idcurso !: number;
  curso !: Curso;
}
