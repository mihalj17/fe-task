import { Component, Input } from '@angular/core';
import { Jokes, JokesRepresentation } from '../service/api/models/jokes-representation';


@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrl: './joke-details.component.css',
  


}
)
export class JokeDetailsComponent {
 
  @Input()
  joke: JokesRepresentation = {};
  
  

  Matko(): void {
    if(this.joke.isFavorite == true){
      this.joke.isFavorite = false
      console.log("bio je true sad je false")
    }
    else{
      this.joke.isFavorite = true
      console.log("bio je false sad je true")
      
    }

  }
  
  
}



