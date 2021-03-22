import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CategoriasComponent} from './categorias/categorias.component';
import { LocalesComponent } from './locales/locales.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NuevaCuentaComponent } from './nueva-cuenta/nueva-cuenta.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'locales', component: LocalesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: 'nueva-cuenta', component: NuevaCuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
