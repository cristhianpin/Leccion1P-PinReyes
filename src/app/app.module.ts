import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TablasComponent } from './tablas/tablas.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablasComponent,
    RegistroComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
