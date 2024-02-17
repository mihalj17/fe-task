import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() joke: JokesRepresentation = {};
  @Output() deleteJoke = new EventEmitter<number>();
  
  constructor(private jokesStateService: JokesStateService) { }

  ngOnInit(): void {
    this.jokesStateService.jokes$.subscribe(jokes => {
      this.jokesNew = jokes;
    });
  }

  toggleIsFavorite(jokeId: number): void {
    this.jokesStateService.toggleIsFavorite(jokeId);
    
  }
  onDeleteJoke(): void {
    this.deleteJoke.emit(this.joke.id);
  }
  
}



