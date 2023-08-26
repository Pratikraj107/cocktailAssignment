import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  drinkData: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) { }

  drink:any;

  getDrinkName(name:any){
    this.drink = name;
  }
  getData(){
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ this.drink);
  }
  
}
