import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movies} from "../model/movies";
import {ResultsMovie} from "../model/results-movies";
import {MovieVideo} from "../model/movie-video";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private path = {
    discover: '/discover/movie',
    movie: '/movie/',
    search: "/search/movie",
    page: "?page=",
    video:'/videos',
  }

  private filters = {
    popular: '?sort_by=',

  }
  private base = "https://api.themoviedb.org/3"

  constructor(private httpClient: HttpClient) {
  }
  getMovies(page:number):Observable<Movies>{
    return this.httpClient.get<Movies>(this.base+this.path.discover+this.path.page+page)
  }
  getMovieId(id:number): Observable<ResultsMovie> {
    return this.httpClient.get<ResultsMovie>(this.base + this.path.movie + id)
  }
  getVideo(id:number):Observable<MovieVideo>{
    return this.httpClient.get<MovieVideo>(`${this.base}${this.path.movie}${id}${this.path.video}`)
  }
  getMoviesPopular(sort:string):Observable<Movies>{
    return this.httpClient.get<Movies>(this.base+this.path.discover+this.filters.popular+sort)
  }
  getMovieSearch(text:string):Observable<Movies>{
    return this.httpClient.get<Movies>(this.base+this.path.search+"?query="+text)
  }
}
