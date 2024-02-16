import { Component } from '@angular/core';
import {  JokesRepresentation } from '../service/api/models/jokes-representation';
import { JokesService } from '../service/api/jokes/jokes.service';
import { JokesStateService } from '../service/api/jokesState/jokes-state.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {
 
  
  jokesNew: Array<JokesRepresentation> = [];
  
  constructor(private service: JokesService, private  jokesStateService: JokesStateService){ }

  ngOnInit(): void {
    const localJokes = localStorage.getItem('Local');
    if (localJokes) {
     
      this.jokesNew = JSON.parse(localJokes);
      this.jokesNew.forEach(joke => {
        joke.isFavorite = !!joke.isFavorite;
      });
    } else {
      
      this.fetchJokes();
    }
    this.jokesStateService.setJokesNew(this.jokesNew);
  }

  fetchJokes(): void {
    this.service.getAllJokes().subscribe({
      next: (result) => {
        console.log(result.jokes);
        result.jokes.forEach(jokesElement => {
        
          this.jokesNew.push(this.service.copyToObject(jokesElement));
        });
        localStorage.setItem('Local', JSON.stringify(this.jokesNew));
        this.jokesStateService.setJokesNew(this.jokesNew);
      }
    });
  }
  toogleIsFavorite(jokeId: number): void{
    this.jokesStateService.toggleIsFavorite(jokeId);
  }
  
}
