import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules
import { environment } from 'src/environments/environment';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';;
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListarSuperHeroesComponent } from './components/listar-super-heroes/listar-super-heroes.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ListarSuperHeroesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireAuthModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // AngularFireModule,
    HttpClientModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
