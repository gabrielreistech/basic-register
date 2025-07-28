import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-page/home.component';
import { ComponentsModule } from '../components/module-components.module';
import { ListRegisterPageComponent } from './list-register-page/list-register-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListRegisterPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    ListRegisterPageComponent,
  ]
})
export class PagesModule { }
