import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cocktail', component: CocktailComponent},
  {path:'ingredients', component: IngredientComponent},
  {path:'ingredients/:id', component: IngredientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
