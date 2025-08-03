import { Component } from '@angular/core';
import { User } from '../../interfaces/user-interface/user-interface.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
   user:User = {nome:'Reis', email:'gabriel@gmail.com', sexo:'feminino'};
}
