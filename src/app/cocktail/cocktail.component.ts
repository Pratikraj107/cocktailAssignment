import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  
  drinkType = [
    {value:'Alcoholic', viewValue:'Alcoholic'},
    {value:'Non-Alcoholic',viewValue:'Non-Alcoholic' }
  ]
  drinksData :any;
  displayData: any;
  selectedDrink:any;
  constructor(private data: DataService, private route: Router){}

  ngOnInit(){
    this.data.getData()
    .subscribe((data)=>{
        const dData:any = data;
        this.displayData = dData.drinks;
    });
  }

  getIngredients(_id:any){
    this.route.navigate(['ingredients', _id]);
   }
   
}
