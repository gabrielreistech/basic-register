import { Component } from '@angular/core';
import { UserService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user-interface/user-interface.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  
  constructor(private userService:UserService, private router:Router){}

  userView = this.userService.personDataView$;

  userObersavable = this.userService.personUpdateDate$;

  update(userData:User){
    this.userService.sendData(userData);
    this.router.navigate(["/updateuser"]);
  }

  remove(user:User | undefined){
    this.userService.removePerson(user);
    this.router.navigate(['/listregister']);
  }

  goBack(){
    this.router.navigate(["/listregister"])
  }
}
