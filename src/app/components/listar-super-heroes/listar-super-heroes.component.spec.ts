import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSuperHeroesComponent } from './listar-super-heroes.component';

describe('ListarSuperHeroesComponent', () => {
  let component: ListarSuperHeroesComponent;
  let fixture: ComponentFixture<ListarSuperHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSuperHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSuperHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
