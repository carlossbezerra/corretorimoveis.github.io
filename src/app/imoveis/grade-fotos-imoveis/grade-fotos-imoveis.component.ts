import { Component, Input, OnInit } from '@angular/core';
import { Imoveis } from '../imoveis';

@Component({
  selector: 'app-grade-fotos-imoveis',
  templateUrl: './grade-fotos-imoveis.component.html',
  styleUrls: ['./grade-fotos-imoveis.component.css']
})
export class GradeFotosImoveisComponent implements OnInit {

  @Input() imoveis!: Imoveis

  constructor() { }

  ngOnInit(): void {
  }

}
