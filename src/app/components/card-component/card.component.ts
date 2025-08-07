import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user-interface/user-interface.component';
import { UserService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {

  constructor(private userService:UserService, private router:Router){}


   @Input() cardData?: User;

   remove(user:User | undefined){
     this.userService.removePerson(user);
   }

   update(user:User | undefined){
     this.userService.sendData(user);
     this.router.navigate(["/updateuser"])
   }

   userData(userData:User | undefined){
     this.userService.sendDataView(userData);
     this.router.navigate(['/user']);
   }
}
