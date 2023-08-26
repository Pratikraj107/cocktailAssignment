import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: Router, private data: DataService){}

  getMojito(name:any){
   this.data.getDrinkName(name); 
   this.route.navigate(['cocktail']);
  }
  getMargarita(name:any){
    this.data.getDrinkName(name); 
    this.route.navigate(['cocktail']);
  }
}
