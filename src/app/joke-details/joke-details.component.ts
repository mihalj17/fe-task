import { Component, Input } from '@angular/core';
import {  JokesRepresentation } from '../service/api/models/jokes-representation';
import { JokesStateService } from '../service/api/jokesState/jokes-state.service';


@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrl: './joke-details.component.css',
  


}
)
export class JokeDetailsComponent {
  jokesNew: Array<JokesRepresentation> = [];

  @Input()
  joke: JokesRepresentation = {};
  
  
  constructor(private jokesStateService: JokesStateService) { }

  ngOnInit(): void {
    this.jokesStateService.jokesNew$.subscribe(jokes => {
      this.jokesNew = jokes;
    });
  }

  toggleIsFavorite(jokeId: number): void {
    this.jokesStateService.toggleIsFavorite(jokeId);
    if (typeof this.joke.isFavorite === 'boolean') {
      this.joke.isFavorite = !this.joke.isFavorite;
      console.log("The favorite status of the joke has been toggled.");
    } else {
      console.log("The favorite status of the joke is undefined.");
    }
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  
  
  
}



