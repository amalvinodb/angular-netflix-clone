import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dotenv from 'dotenv'
dotenv.config()


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = 'https://api.themoviedb.org/3';
  constructor(private http:HttpClient) { }
  getLatestMovies():any{
    console.log(process.env['TMDB_API_KEY'])
    return this.http.get<any>(this.url+'/movie/latest?api_key=');
  }
}
