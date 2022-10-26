import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ImoveisService } from '../imoveis.service';

@Component({
  selector: 'app-novo-imovel',
  templateUrl: './novo-imovel.component.html',
  styleUrls: ['./novo-imovel.component.css']
})
export class NovoImovelComponent implements OnInit {
  formularioImovel!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private imoveisService: ImoveisService,
    private formbuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.formularioImovel = this.formbuilder.group({
      file: ['', Validators.required],
      description:['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments =
    this.formularioImovel.get('allowComments')?.value ?? false;
    const description =
    this.formularioImovel.get('description')?.value ?? '';

    this.imoveisService.upload(description, allowComments, this.file)
    .pipe(finalize(() => this.router.navigate(['imoveis']))
    ).subscribe(
      (event:HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.percentualConcluido = Math.round(100 * (event.loaded / total));
      }
    },
    (error) => console.log(error)
    );
  }

  gravaArquivo(arquivo: any): void{
    const file = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (
      this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

}
