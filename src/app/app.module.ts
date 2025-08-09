import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/module-pages.module';
import { UserInterfaceComponent } from './interfaces/user-interface/user-interface.component';
import { AlertComponent } from './components/alert-register/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
