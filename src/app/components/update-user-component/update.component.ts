import { Component, OnInit, ViewChild } from '@angular/core';
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
export class UpdateComponent implements OnInit{

  @ViewChild(AlertUpdateComponent) alertUpdateComponent!: AlertUpdateComponent;
   
  constructor(private userService:UserService, private router:Router){}

  user?:User;
  userView?:User;

   ngOnInit(): void {
     this.userService.personUpdateDate$.subscribe(
      userObservable => {
        this.user = userObservable;
        this.userView = {...userObservable} as User;
      }
     )
   }

   update(userView:User){
     this.user = {...userView};
     this.userService.updatePerson(this.user);
     this.alertUpdateComponent.showAlert();
   }

   goBack(){
    this.router.navigate(["/listregister"])
   }
}
