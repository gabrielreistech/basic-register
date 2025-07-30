import { Component } from '@angular/core';
import { ListService } from '../../service/list-service.service';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrl: './list-register.component.css'
})

export class ListRegisterComponent {

  constructor(public listService: ListService){}

  users = this.listService.listRegister$; 
  
}
