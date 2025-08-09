import { Component } from '@angular/core';

export interface User{
  id?:number;
  nome:string;
  email:string;
  sexo:string;
}

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.css'
})
export class UserInterfaceComponent {
   
}
