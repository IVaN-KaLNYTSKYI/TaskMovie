import {Component, OnInit} from '@angular/core';
import {Movies} from "../../model/movies";
import {MoviesService} from "../../services/movies.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movies
  movieLoading = false

  text = new FormControl("")
  myForm = new FormGroup({
    text: this.text
  });

  constructor(private moviesService: MoviesService) {
  }

  loading(){
    this.movieLoading = false
    setTimeout(() => {
      this.movieLoading = true
    },500 )
  }


  ngOnInit(): void {
    this.moviesService.getMovies(1).subscribe(value => {
      this.movies = value
    })
    setTimeout(() => {
      this.movieLoading = true
    }, 1500)

  }

  back(page: number) {
    this.moviesService.getMovies(this.movies.page - page).subscribe(value => {
      this.movies = value
    })
    this.loading()
  }

  next(page: number) {
    this.moviesService.getMovies(this.movies.page + page).subscribe(value => {
      this.movies = value
    })
    this.loading()
  }

  lastPage(page: number) {
    this.moviesService.getMovies(page).subscribe(value => {
      this.movies = value
      console.log(value)
    })
    this.loading()
  }

  firstPage(page: number) {
    this.moviesService.getMovies(page).subscribe(value => {
      this.movies = value
    })
    this.loading()
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

  noPopular(event: string) {
    this.moviesService.getMoviesPopular(event).subscribe(value => {
      this.movies = value
    })
    this.loading()
  }

  popular(event: string) {
    this.moviesService.getMoviesPopular(event).subscribe(value => {
      this.movies = value
    })
    this.loading()
  }

  rating(desc: string) {
    this.moviesService.getMoviesPopular(desc).subscribe(value => {
      this.movies = value
    })
    this.loading()
  }

  noRating(asc: string) {
    this.moviesService.getMoviesPopular(asc).subscribe(value => {
      this.movies = value
    })
    this.loading()
  }

  search() {
    if (this.text.value === "") {
      this.moviesService.getMovies(1).subscribe(value => {
        this.movies = value
      })
    } else {
      this.moviesService.getMovieSearch(this.text.value).subscribe(value => this.movies = value)
    }

  }
}
