import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {ResultsMovie} from "../../model/results-movies";
import {MovieVideo} from "../../model/movie-video";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: ResultsMovie
  id: number
  video: MovieVideo
  movieImg = 'https://image.tmdb.org/t/p/original'
  flag = false

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe(value => {
      this.id = +value.id
      this.moviesService.getMovieId(this.id).subscribe(value => {
        this.movie = value
        console.log(this.movie)
      })
    })
    this.moviesService.getVideo(this.id).subscribe(value => {
      this.video = value
    })
  }

  ngOnInit(): void {
  }

  movieVideo(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }

  fon(url: string) {
    return (
      `background-image:linear-gradient(rgba(0,0,0,0.6),
       rgba(0,0,0,0.6)),url(https://image.tmdb.org/t/p/original${url})`
    )
  }

  play() {
    this.flag = !this.flag
  }
}
