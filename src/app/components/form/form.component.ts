import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form = new FormGroup({
     nome : new FormControl('', Validators.required),
     email : new FormControl('', Validators.required)
  }
  )

  onSubmit(){
    console.log(this.form.value)
  }
}
