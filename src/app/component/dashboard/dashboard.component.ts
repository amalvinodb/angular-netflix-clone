import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latestMovies!: any;
  popularMovies!: Movie;
  nowPlayingMovies!:Movie;
  topRatedMovies!:Movie;
  upcommingMovies!:Movie;
  trendingMovie!:Movie;
  originals!:Movie;
 


  constructor (private dataService:DataService){}

  ngOnInit():void {
    this.getLatestMovie();
    this.getPopularMovie();
    this.getOriginalMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpcommingMovies();
    this.getTrendingMovies()
  }

  getLatestMovie(){
    
    this.dataService.getLatestMovies().subscribe((res) => {this.latestMovies = this.changeData(res)},(err)=>{if(err)console.log("there have been an error in latest movies:"+err)})
  }
  changeData(res:any) :any{
    res.backdrop_path = 'https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg?api_key=50c77bd1d72501f49fbfd9ca366b0d4d'
    return res;
  }
  getPopularMovie(){
    this.dataService.getPopularMovies().subscribe((res)=>{
    
      this.popularMovies = this.modifyData(res)},(err)=>{if(err)console.log("there have been an error in popular movies:"+err)})
  }
  getNowPlayingMovies(){
    this.dataService.getNowPlaying().subscribe((res)=>{
 
      this.nowPlayingMovies = this.modifyData(res)},(err)=>{if(err)console.log("there have been an error in now playing movies:"+err)})
  }
  getTopRatedMovies(){
    this.dataService.getTopRatedMovies().subscribe((res)=>{

      this.topRatedMovies = this.modifyData(res)},(err)=>{if(err)console.log("there have been an error in top rated movies:"+err)})
  }
 getUpcommingMovies(){
  this.dataService.getUpcommingMovies().subscribe((res)=>{this.upcommingMovies = this.modifyData(res)},(err)=>{if(err)console.log("there have been an error in upcomming movies:"+err)})
 }
 getTrendingMovies(){
  this.dataService.gettrendingMovies().subscribe((res)=>{this.trendingMovie = this.modifyData(res)},(err)=>{if(err)console.log("there have been an error in trending movies:"+err)})
 }
 getOriginalMovies(){
  this.dataService.getOriginalsMovies().subscribe((res)=>{

    this.originals = this.modifyData(res)},(err)=>{if(err)console.log("there have been an error in original movies:"+err)})
 }


  modifyData(movies:Movie) : Movie {
    if(movies.results){
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key=50c77bd1d72501f49fbfd9ca366b0d4d'
        if(!element.title){
          element.title = element?.name
        }
      })
    }
    return movies;
  }
}
