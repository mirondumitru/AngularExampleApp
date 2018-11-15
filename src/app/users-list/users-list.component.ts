import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[];

  constructor() { 
    this.usersList = [];

    var user1 = new User();
    user1.email ="dmiron@gmail.com";
    user1.username= "dmiron";
    user1.isActive = true;

    var user2 = new User();
    user2.email ="ionVasile@gmail.com";
    user2.username= "ionVasile";
    user2.isActive = false;

    this.usersList.push(user1);
    this.usersList.push(user2);
  }

  ngOnInit() {
  }


  addUser(user:User):void{
    this.usersList.push(user);
  }
}
