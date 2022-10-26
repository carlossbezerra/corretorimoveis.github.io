import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Imoveis } from '../imoveis';
import { ImoveisService } from '../imoveis.service';

@Injectable({
  providedIn: 'root',
})
export class ListaImoveisResolver implements Resolve<Imoveis> {

  constructor(
    private imoveisService: ImoveisService,
    private usuarioService: UsuarioService
  ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Imoveis> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.imoveisService.listaDoUsuario(userName);
      }),
      take(1)
    );
  }
}
