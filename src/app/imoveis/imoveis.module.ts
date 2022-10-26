import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoveisRoutingModule } from './imoveis-routing.module';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ImovelComponent } from './imovel/imovel.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeFotosImoveisComponent } from './grade-fotos-imoveis/grade-fotos-imoveis.component';
import { DetalheImovelComponent } from './detalhe-imovel/detalhe-imovel.component';
import { ComentariosComponent } from './detalhe-imovel/comentarios/comentarios.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NovoImovelComponent } from './novo-imovel/novo-imovel.component';


@NgModule({
  declarations: [
    ListaImoveisComponent,
    ImovelComponent,
    GradeFotosImoveisComponent,
    DetalheImovelComponent,
    ComentariosComponent,
    NovoImovelComponent,
  ],
  imports: [
    CommonModule,
    ImoveisRoutingModule,
    CartaoModule,
    SharedModule,

  ]
})
export class ImoveisModule { }
