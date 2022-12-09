import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = 'https://api.themoviedb.org/3';
  constructor(private http:HttpClient) { }
  getLatestMovies():Observable<any>{

    return this.http.get<any>(this.url+'/movie/latest?api_key=50c77bd1d72501f49fbfd9ca366b0d4d');
  }
  getPopularMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/popular?api_key=50c77bd1d72501f49fbfd9ca366b0d4d')
  }
  getNowPlaying():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/now_playing?api_key=50c77bd1d72501f49fbfd9ca366b0d4d')
  }
  getTopRatedMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/top_rated?api_key=50c77bd1d72501f49fbfd9ca366b0d4d')
  }
  getUpcommingMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/upcomming?api_key=50c77bd1d72501f49fbfd9ca366b0d4d')
  }
  gettrendingMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/trending/all/week?api_key=50c77bd1d72501f49fbfd9ca366b0d4d')
  }
  getOriginalsMovies():Observable<Movie>{
    return this.http.get<Movie>(this.url+'/discover/tv?api_key=50c77bd1d72501f49fbfd9ca366b0d4d')
  }
}
