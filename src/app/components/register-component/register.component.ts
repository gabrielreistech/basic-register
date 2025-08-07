import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user-service.service';
import { AlertComponent } from '../alert-register/alert.component';
import { ViewChild } from '@angular/core';

interface User{
  nome:string;
  email:string;
  sexo:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @ViewChild(AlertComponent) alertComponent!: AlertComponent;

  constructor(private userService: UserService){}

    formularioIncompleto : boolean = false;

    user:User = {} as User;

    onSubmit(formRef:NgForm){
      if(formRef.valid){
        this.formularioIncompleto = false;
        this.userService.registerPerson(this.user);
        this.alertComponent.showAlert();
      }
      else{
        this.formularioIncompleto = true;
      }
    }
}
