import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JokesRepresentation } from '../models/jokes-representation';

@Injectable({
  providedIn: 'root'
})
export class JokesStateService {
 private jokesNewSubject = new BehaviorSubject<JokesRepresentation[]>([]);
  jokesNew$ = this.jokesNewSubject.asObservable();

  constructor() { }

  setJokesNew(jokes: JokesRepresentation[]):void{
    this.jokesNewSubject.next(jokes);
  }

  toggleIsFavorite(jokeId: number): void {
    const jokes = this.jokesNewSubject.getValue();
    const updatedJokes = jokes.map(joke => {
      if (joke.id === jokeId) {
        joke.isFavorite = !joke.isFavorite;
      }
      return joke;
    });
    this.jokesNewSubject.next(updatedJokes);
    localStorage.setItem('Local', JSON.stringify(updatedJokes));

  }
}
