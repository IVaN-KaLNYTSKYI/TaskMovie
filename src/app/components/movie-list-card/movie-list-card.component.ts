import {Component, Input, OnInit} from '@angular/core';
import {ResultsMovie} from "../../model/results-movies";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {
  @Input()
  movie: ResultsMovie

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  detail() {
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute});
  }

  dark() {
    // @ts-ignore
    return JSON.parse<boolean>(localStorage.getItem("theme"))
  }
}
