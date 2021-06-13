import {Component,Input, OnInit, Output} from '@angular/core';
import {GenreService} from "../../services/genre.service";
import {Genres} from "../../model/genres";
import {FormControl, FormGroup} from "@angular/forms";
import {ResultsMovie} from "../../model/results-movies";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
  genres: Genres


  id = new FormControl(0)
  myForm = new FormGroup({
    id: this.id
  });

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => {
      console.log(value)
      this.genres = value
    })
  }

  save() {
    console.log(this.myForm.getRawValue())
  }
}
