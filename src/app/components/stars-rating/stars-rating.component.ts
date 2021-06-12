import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnInit {
  @Input()
  star: number

  constructor() {
  }

  ngOnInit(): void {
  }

}
