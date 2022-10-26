import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Imoveis, Imovel } from './imoveis';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string):Observable<Imoveis> {
    return this.http.get<Imoveis>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscarPorId(id: number): Observable<Imovel> {
    return this.http.get<Imovel>(`${API}/photos/${id}`);
  }

  excluiImovel(id: number): Observable<Imovel> {
    return this.http.delete<Imovel>(`${API}/photos/${id}`);
  }

  curtir(id: number):Observable<boolean> {
  return this.http
  .post(`${API}/photos/${id}/like`,{}, { observe: 'response'})
  .pipe(
  mapTo(true),
  catchError((error)=>{
    return error.status === NOT_MODIFIED ? of(false) : throwError(error);
  })
 );
 }
upload(descricao: string, permiteComentario: boolean, arquivo: File) {
  const formData = new FormData();
  formData.append('description', descricao);
  formData.append('allowComments', permiteComentario ? 'true' : 'false');
  formData.append('imageFile', arquivo);

  return this.http.post(`${API}/photos/upload`, formData,{
    observe: 'events',
    reportProgress: true,

});
}

}
