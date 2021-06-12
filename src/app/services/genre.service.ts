import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Genres} from "../model/genres";


@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private path = {
    genres:'/genre/movie/list'
  }
  private base = "https://api.themoviedb.org/3"
  private API_KEY = "?api_key=8aaf14eada5c1779a594aaa553b31207"

  constructor(private httpClient: HttpClient) {
  }
  getGenres():Observable<Genres>{
    return this.httpClient.get<Genres>(this.base+this.path.genres+this.API_KEY)
  }
}
