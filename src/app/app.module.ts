import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FavoritesComponent,
    JokesComponent,
    JokeDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
