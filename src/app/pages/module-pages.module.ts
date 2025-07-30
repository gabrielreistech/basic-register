import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home.component';
import { ComponentsModule } from '../components/module-components.module';
import { ListRegisterPageComponent } from './list-register-page/list-register-page.component';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ListRegisterPageComponent,
    AboutPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomePageComponent,
    ListRegisterPageComponent,
    AboutPageComponent,
  ]
})
export class PagesModule { }
