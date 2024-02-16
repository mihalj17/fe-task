import { Component } from '@angular/core';
import { JokesRepresentation } from '../service/api/models/jokes-representation';
import { JokesStateService } from '../service/api/jokesState/jokes-state.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favoriteJokes: JokesRepresentation[] = [];

  constructor(private jokesStateService: JokesStateService){}


  ngOnInit(): void {
    this.loadFavoriteJokes();
  
  }
  loadFavoriteJokes(): void {
    const localData = localStorage.getItem('Local');
    if (localData) {
      try {
        const allJokes: JokesRepresentation[] = JSON.parse(localData);
        this.favoriteJokes = allJokes.filter(joke => joke.isFavorite);
      } catch (error) {
        console.error('Error parsing local data:', error);
      }
    }
  }

  deleteFavoriteJoke(jokeId: number): void {
    
  this.favoriteJokes = this.favoriteJokes.filter(joke => joke.id !== jokeId);
  this.jokesStateService.setJokesNew(this.favoriteJokes);
  localStorage.setItem('Local', JSON.stringify(this.favoriteJokes));
  
  }

  
}
