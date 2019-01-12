import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/usersService';
import { User } from 'src/models/user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

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
    
    var parameter = this.route.snapshot.paramMap.get('parameter');

    console.log(parameter);
  }

  usersList: User[];

  constructor(private route: ActivatedRoute, usersService: UsersService) {
    this.usersService = usersService;
    this.isLoading = false;
  }

  userAdded(user: User) {
    this.isLoading = true;

    this.usersService.save(user).subscribe(x=>{
      console.log(x);
    });
  }

  getUsers(): any {
    this.isLoading = false;

    this.usersService.getAll().subscribe(response => {
      // this.usersList = users;
      // this.isLoading = false;

      console.log(response)
    });
  }
}