import {Component, OnInit} from '@angular/core';
import {Movies} from "../../model/movies";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movies

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMovies(1).subscribe(value => {
      this.movies = value
    })

  }

  back(page: number) {
    this.moviesService.getMovies(this.movies.page - page).subscribe(value => {
      this.movies = value
    })
  }

  next(page: number) {
    this.moviesService.getMovies(this.movies.page + page).subscribe(value => {
      this.movies = value
    })
  }

  lastPage(page: number) {
    this.moviesService.getMovies(page).subscribe(value => {
      this.movies = value
      console.log(value)
    })
  }

  firstPage(page: number) {
    this.moviesService.getMovies(page).subscribe(value => {
      this.movies = value
    })
  }

  dark() {
    // @ts-ignore
    return JSON.parse<boolean>(localStorage.getItem("theme"))
  }

  /*fil(event: void) {
    console.log(event)
    this.res = this.res.filter((value) => value.genre_ids.includes(event))  це для select
    this.flag=true
    console.log(this.res)
  }*/
}
