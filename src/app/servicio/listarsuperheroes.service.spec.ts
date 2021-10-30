import { TestBed } from '@angular/core/testing';

import { ListarsuperheroesService } from './listarsuperheroes.service';

describe('ListarsuperheroesService', () => {
  let service: ListarsuperheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarsuperheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
