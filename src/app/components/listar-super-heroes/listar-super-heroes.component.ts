import { Component, OnInit } from '@angular/core';
import { ListarsuperheroesService } from 'src/app/servicio/listarsuperheroes.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listar-super-heroes',
  templateUrl: './listar-super-heroes.component.html',
  styleUrls: ['./listar-super-heroes.component.scss']
})
export class ListarSuperHeroesComponent implements OnInit {

  constructor(private SuperheroesSvc: ListarsuperheroesService) { }
   allSuperheroes: Observable <any>;
  ngOnInit() {
    this.getSuperheroes();

  }

  getSuperheroes(){
    this.allSuperheroes = this.SuperheroesSvc.getAllListarsuperheroes();
  }

}
