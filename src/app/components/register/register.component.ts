import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

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

    formularioIncompleto : boolean = false;

    user:User = {} as User;

    onSubmit(formRef:NgForm){
      if(formRef.valid){
        this.formularioIncompleto = false;
        console.log(this.user)
      }
      else{
        this.formularioIncompleto = true;
      }
    }
}
