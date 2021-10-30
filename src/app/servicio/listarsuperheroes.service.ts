import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ListarsuperheroesService {
  public_key ='564484388156057';
  Hash ='';
  Url_api=`https://superheroapi.com/api/${this.public_key}&hash=${this.Hash}`
  

  constructor(private  http: HttpClient) 
   { }

   getAllListarsuperheroes(): Observable<any>{
     return this.http.get<any>(this.Url_api)
      .pipe(map((data: any) => data.data.results))
   }
}
