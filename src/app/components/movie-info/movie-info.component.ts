import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input()
  title: string
  @Input()
  overview: string

  constructor() {
  }

  ngOnInit(): void {
  }

}
