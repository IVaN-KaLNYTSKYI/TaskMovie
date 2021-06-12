import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GenreService} from "../../services/genre.service";
import {Genres} from "../../model/genres";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
  genres: Genres

  @Output() idGenres = new EventEmitter()

  id = new FormControl(0)
  myForm = new FormGroup({
    id:this.id
  });
  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => {
      console.log(value)
      this.genres=value
    })
  }

  save() {
    console.log(this.myForm.getRawValue())
    this.idGenres.emit(this.id.value)

  }
}
