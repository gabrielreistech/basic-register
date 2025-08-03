import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header.component';
import { RegisterComponent } from './register-component/register.component';
import { FormsModule } from '@angular/forms';
import { ListRegisterComponent } from './list-register-component/list-register.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card-component/card.component';
import { AlertComponent } from './alert/alert.component';
import { UpdateComponent } from './update-user-component/update.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RegisterComponent,
    ListRegisterComponent,
    CardComponent,
    AlertComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    RegisterComponent,
    ListRegisterComponent,
    CardComponent,
    AlertComponent,
    UpdateComponent,
  ]
})
export class ComponentsModule { }
