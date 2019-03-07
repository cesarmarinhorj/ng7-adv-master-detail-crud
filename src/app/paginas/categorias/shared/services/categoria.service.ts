import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, flatMap } from "rxjs/operators";

import { Categoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  private apiPath: string = "api/categorias";
  
  constructor(private http: HttpClient) {}

  // private methods
  // tratamento de erro
  private handleError(error: any): Observable<any>{
    console.log('Erro na requisição!', error);
    return throwError(error);
  }

  // converte dados em json para um array de categorias
  private jsonDataToCategorias(jsonData: any[]): Categoria[]{
    const categorias: Categoria[] = [];
    jsonData.forEach(function(element) {
      categorias.push(element as Categoria);
    });
    return categorias;
  }
  
  // converte dados em json para uma categoria
  private jsonDataToCategoria(jsonData: any): Categoria{
    return jsonData as Categoria;
  }

  // public methods
  // todas as categgorias
  getAll(): Observable<Categoria[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorias)
    )
  }

  // categoria por id
  getById(id: string): Observable<Categoria> {
    const url: string = '${this.apiPath}/${id}'; 
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    )
  }

  // nova categoria
  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.apiPath, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );
  }

  // atualiza categoria
  update(categoria: Categoria): Observable<Categoria> {
    const url: string = '${this.apiPath}/${categoria.id}'; 
    return this.http.put(this.apiPath, categoria).pipe(
      catchError(this.handleError),
      map(() => categoria)
    );
  }

  // deleta uma categoria
  delete(id: string): Observable<Categoria> {
    const url: string = '${this.apiPath}/${id}'; 
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

}
