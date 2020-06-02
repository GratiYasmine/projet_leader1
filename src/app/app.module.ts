import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ElevesComponent } from './eleves/eleves.component';
import { ParentsComponent } from './parents/parents.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { InspecteurComponent } from './inspecteur/inspecteur.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AdminPropertiesComponent } from './admin/admin-properties/admin-properties.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AdminComponent,
    ElevesComponent,
    ParentsComponent,
    EnseignantsComponent,
    InspecteurComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    AdminPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
