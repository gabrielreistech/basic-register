import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home.component';
import { ComponentsModule } from '../components/module-components.module';
import { ListRegisterPageComponent } from './list-register-page/list-register-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UpdatePageComponent } from './update-page/update-user.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ListRegisterPageComponent,
    AboutPageComponent,
    UpdatePageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomePageComponent,
    ListRegisterPageComponent,
    AboutPageComponent,
    UpdatePageComponent
  ]
})
export class PagesModule { }
