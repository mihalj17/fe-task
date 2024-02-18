import { Component, OnInit } from '@angular/core';
import { JokesRepresentation } from '../service/api/models/jokes-representation';
import { JokesStateService } from '../service/api/jokesState/jokes-state.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favoriteJokes: JokesRepresentation[] = [];
  localStorageSubscription: any;

  constructor(private jokesStateService: JokesStateService){

    this.localStorageSubscription = window.addEventListener('storage', () => {
      this.loadFavoriteJokes();
    });
    this.loadFavoriteJokes();
  }


  ngOnDestroy(): void {
    window.removeEventListener('storage', this.localStorageSubscription);
  }
  
  loadFavoriteJokes(): void {
    const localData = localStorage.getItem('Local');
    if (localData) {
      const allJokes: JokesRepresentation[] = JSON.parse(localData);
      this.favoriteJokes = allJokes.filter(joke => joke.isFavorite);
    }
    console.log("kurcina");
  }

  deleteFavoriteJoke(jokeId: number): void {
    this.favoriteJokes = this.favoriteJokes.filter(joke => joke.id !== jokeId);
    localStorage.setItem('Local', JSON.stringify(this.favoriteJokes));
  }
  manuallyReloadFavoriteJokes(): void {
    this.loadFavoriteJokes();
  }
  
}
