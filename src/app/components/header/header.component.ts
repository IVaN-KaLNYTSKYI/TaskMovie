import {Component, OnInit} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  theme: boolean = JSON.parse<string>(localStorage.getItem("theme"))

  constructor() {
  }

  ngOnInit(): void {
  }

  them(event: MatSlideToggleChange) {
    this.theme = event.checked
    localStorage.setItem("theme", JSON.stringify(this.theme))
  }
}
