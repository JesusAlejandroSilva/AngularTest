import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return [
      { id: 1, nombre: 'JuanPerez', correo: 'jeperez@gmail.com' },
      { id: 2, nombre: 'JoseErnesto', correo: 'joseErnesto@gmail.com' },
      { id: 3, nombre: 'User3', correo: 'joseErnesto@gmail.com' },
      { id: 4, nombre: 'user4', correo: 'joseErnesto@gmail.com' },
    ];
  }
}
