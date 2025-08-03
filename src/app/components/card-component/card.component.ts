import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user-interface/user-interface.component';
import { ListService } from '../../service/list-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {

  constructor(private listService:ListService){}


   @Input() cardData?: User;

   remove(user:User | undefined){
     this.listService.removePerson(user);
   }
}
