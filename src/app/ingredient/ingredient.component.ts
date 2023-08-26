import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit{

  displayData: any;
  dData: any;
  dd:any;
  id: number | undefined;
  constructor(private data: DataService, private route: ActivatedRoute, private routes: Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
      this.data.getData().subscribe((data)=>{
        this.dData = data;
        const dd = this.dData.drinks;
        this.displayData =  dd.filter((val: any,index: any) =>{
            return val.idDrink === this.id;
        } )
    });
  }
  
  getBack(){
      this.routes.navigate(['cocktail'])
  }

}
