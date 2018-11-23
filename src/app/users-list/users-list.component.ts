import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/usersService';
import { User } from 'src/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersService: UsersService;
  isLoading: boolean;

  ngOnInit(): void {
    this.getUsers();
  }

  usersList: User[];

  constructor(usersService: UsersService) { 
    this.usersList = [];
    this.usersService = usersService;
  }

  userAdded(user:User){
    this.isLoading = true;
    
    this.usersService.save(user).subscribe(res=>{
      this.isLoading = false;

      this.getUsers();
    });
  }

  getUsers(): any {
    this.isLoading = true;

    this.usersService.getAll().subscribe(users =>{
      this.usersList = users;
      this.isLoading = false;
    })
  }
}