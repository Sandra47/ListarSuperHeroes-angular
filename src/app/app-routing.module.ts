import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSuperHeroesComponent } from './components/listar-super-heroes/listar-super-heroes.component';

const routes: Routes = [
   {path:'listar-super-heroes',component: ListarSuperHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
