import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  @Output() popularClick = new EventEmitter()
  @Output() noPopularClick = new EventEmitter()
  @Output() ratingClick = new EventEmitter()
  @Output() noRatingClick = new EventEmitter()


  constructor() {
  }

  ngOnInit(): void {
  }

  popular() {
    this.popularClick.emit()
  }

  noPopular() {
    this.noPopularClick.emit()
  }

  rating() {
    this.ratingClick.emit()
  }

  noRating() {
    this.noRatingClick.emit()
  }

}
