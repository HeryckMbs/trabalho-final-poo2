import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoNovoComponent } from './aluno-novo/aluno-novo.component';
import { MAT_DATE_LOCALE } from '@angular/material/core'

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';
@NgModule({
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    CursoNovoComponent,
    CursoEditarComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AlunoComponent,
    AlunoNovoComponent,
    AlunoEditarComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgFor,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    NgbModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ScrollingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
