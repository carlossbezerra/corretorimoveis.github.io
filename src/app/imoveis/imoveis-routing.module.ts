import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheImovelComponent } from './detalhe-imovel/detalhe-imovel.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ListaImoveisResolver } from './lista-imoveis/lista-imoveis.resolver';
import { NovoImovelComponent } from './novo-imovel/novo-imovel.component';


const routes: Routes = [
  {
    path: '',
    component: ListaImoveisComponent,
    resolve: {
      imoveis: ListaImoveisResolver
    },
  },
  {
    path: 'novo',
    component: ListaImoveisComponent,

  },

  {
    path:':imovelid',
    component: DetalheImovelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImoveisRoutingModule { }
