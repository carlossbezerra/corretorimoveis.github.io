import { TestBed } from '@angular/core/testing';

import { ListaImoveisResolver } from './lista-imoveis.resolver';

describe('ListaImoveisResolver', () => {
  let resolver: ListaImoveisResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaImoveisResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
