import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  search: string = '';
  filterByUsers: any[] = [];

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.getUsers();
    this.filterUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  filterUsers() {
    this.filterByUsers = this.users.filter(user =>
      user.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
      user.correo.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  RecargUsers() {
    this.getUsers();
  }

  Buscar(){
    this.filterUsers();
  }

}
