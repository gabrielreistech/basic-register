import { Component, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user-interface/user-interface.component';
import { UserService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert-register/alert.component';
import { AlertUpdateComponent } from '../alert-update/alert-update.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  @ViewChild(AlertUpdateComponent) alertUpdateComponent!: AlertUpdateComponent;
   
  constructor(private userService:UserService, private router:Router){}

   userObersavable = this.userService.personUpdateDate$;

   update(userData:User){
     this.userService.updatePerson(userData);
     this.alertUpdateComponent.showAlert();
   }

   goBack(){
    this.router.navigate(["/listregister"])
   }
}
