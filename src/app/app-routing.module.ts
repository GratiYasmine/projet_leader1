import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ElevesComponent } from './eleves/eleves.component';
import { ParentsComponent } from './parents/parents.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { InspecteurComponent } from './inspecteur/inspecteur.component';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  {path:'admin', component: AdminComponent},

  {
      path: 'signup', component:  SignUpComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo:'/login', pathMatch: 'full'},

  {path:'eleves', component: ElevesComponent},
  {path:'parents', component: ParentsComponent},
  {path:'enseignants', component: EnseignantsComponent},
  {path:'inspecteur', component: InspecteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
