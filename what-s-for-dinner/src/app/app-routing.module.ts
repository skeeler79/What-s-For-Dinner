import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';
import { WeekDisplayComponent } from './week-display/week-display.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { PreferencesComponent } from './preferences/preferences.component';
<<<<<<< HEAD
import { FavoritesListComponent } from './favorites-list/favorites-list.component'
// import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';
=======
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';
>>>>>>> b4d325b0af39b23ebb6b043bad4d283f1493c00f

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  // { path: 'favorites', component: FavoritesComponent },
  // { path: 'detail', component: RecipeDetailComponent },
  { path: 'detail/:name', component: RecipeDetailComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'favorites-list', component: FavoritesListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }