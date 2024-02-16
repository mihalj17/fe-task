import { Component } from '@angular/core';
import { Jokes, JokesRepresentation } from '../service/api/models/jokes-representation';
import { JokesService } from '../service/api/jokes/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
     
  
  jokesNew: Array<JokesRepresentation> = [];

  constructor(
    private service: JokesService
  ){ }

  ngOnInit(): void {
    this.service.getAllJokes()
    .subscribe({
      next: (result) => {
        this.jokesNew = result.jokes;
        console.log(this.jokesNew)
      }
      
    }
    
    ) 
  }
 
  
  
}
