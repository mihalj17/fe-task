import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'jokes',
    component: JokesComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
