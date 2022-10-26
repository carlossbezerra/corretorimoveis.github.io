import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Imovel } from '../imoveis';
import { ImoveisService } from '../imoveis.service';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhe-imovel.component.html',
  styleUrls: ['./detalhe-imovel.component.css']
})
export class DetalheImovelComponent implements OnInit {

  imovelId!: number;
  imovel$!: Observable<Imovel>;

  constructor(
    private imoveisService: ImoveisService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.imovelId = this.activatedRouter.snapshot.params['imovelid'];
    this.imovel$ = this.imoveisService.buscarPorId(this.imovelId)
  }

  curtir(){
    this.imoveisService.curtir(this.imovelId).subscribe((curtida)=>{
      if (curtida){
        this.imovel$ = this.imoveisService.buscarPorId(this.imovelId)
      }
    })
  }

  excluir() {
    this.imoveisService.excluiImovel(this.imovelId).subscribe(
      () => {
      this.router.navigate(['/imoveis/']);
    },
    (error)=> console.log(error)
    );
  }

}
