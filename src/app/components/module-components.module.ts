import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RegisterComponent,
  ]
})
export class ComponentsModule { }
