import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CostaComponent} from './costa/costa.component';
import {SierraComponent} from './sierra/sierra.component';
import {AmazoniaComponent} from './amazonia/amazonia.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'costa', component: CostaComponent},
  {path: 'sierra', component: SierraComponent},
  {path: 'amazonia', component: AmazoniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
