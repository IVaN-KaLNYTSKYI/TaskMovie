import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  @Output() nextClick: EventEmitter<void> = new EventEmitter()
  @Output() backClick: EventEmitter<void> = new EventEmitter()
  @Output() firstPageClick: EventEmitter<void> = new EventEmitter()
  @Output() lastPageClick: EventEmitter<void> = new EventEmitter()

  @Input()
  page: number

  constructor() {
  }

  ngOnInit(): void {
  }


  firstPage() {
    this.firstPageClick.emit()
  }

  back() {
    this.backClick.emit()
  }

  next() {
    this.nextClick.emit()
  }

  lastPage() {
    this.lastPageClick.emit()
  }
}
