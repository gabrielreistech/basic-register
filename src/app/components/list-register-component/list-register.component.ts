import { Component } from '@angular/core';
import { UserService } from '../../service/user-service.service';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrl: './list-register.component.css'
})

export class ListRegisterComponent {

  constructor(public userService: UserService){}

  users = this.userService.listRegister$; 
  
}
