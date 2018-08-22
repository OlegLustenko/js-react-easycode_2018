import {Component, OnInit} from '@angular/core';
import {RequestUsers} from "./api.service";


interface UserType {
  fullName: string
}

interface ResponseEasyCode {
  users: Array<UserType>
}

@Component({
  selector: 'easy-code',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Easy-code';
  users: Array<UserType>;

  constructor(private requestUsers: RequestUsers) {
  }

  ngOnInit() {
    this.requestUsers.getUsers().subscribe((response: ResponseEasyCode) => {
      console.log(response);
      this.users = response.users;
    });
  }
}
