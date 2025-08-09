import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home.component';
import { ListRegisterPageComponent } from './pages/list-register-page/list-register-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { UpdatePageComponent } from './pages/update-page/update-user.component';
import { UserPageComponent } from './pages/user-page/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'listregister', component: ListRegisterPageComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'updateuser', component: UpdatePageComponent},
  { path: 'user', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
