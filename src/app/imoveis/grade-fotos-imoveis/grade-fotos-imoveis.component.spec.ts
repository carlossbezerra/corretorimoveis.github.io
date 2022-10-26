import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosImoveisComponent } from './grade-fotos-imoveis.component';

describe('GradeFotosImoveisComponent', () => {
  let component: GradeFotosImoveisComponent;
  let fixture: ComponentFixture<GradeFotosImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosImoveisComponent ]
    })
    .compileComponents();

  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(GradeFotosImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
