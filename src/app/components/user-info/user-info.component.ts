import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  dark() {
    // @ts-ignore
    return JSON.parse<boolean>(localStorage.getItem("theme"))
  }
}
