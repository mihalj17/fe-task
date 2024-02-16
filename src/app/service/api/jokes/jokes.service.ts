import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jokes, JokesRepresentation } from '../models/jokes-representation';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private baseUrl= 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political&type=single&amount=10'
  constructor(
    private http: HttpClient
  ) { }

  getAllJokes() {
    const jokesUrl = this.baseUrl;
    return this.http.get<any>(jokesUrl);
    
}
}
