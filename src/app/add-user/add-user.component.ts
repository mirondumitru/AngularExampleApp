import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;

  @Output()
  onAdd: EventEmitter<User> = new EventEmitter();

  constructor() { 
    this.clearUser();
  }

  clearUser()  {
    this.user = new User();
  }

  ngOnInit() {
  }

  addUser() {
    this.onAdd.emit(this.user);

    this.clearUser();
  }
}
