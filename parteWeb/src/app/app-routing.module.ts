import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CategoriasComponent} from './categorias/categorias.component';
import { LocalesComponent } from './locales/locales.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NuevaCuentaComponent } from './nueva-cuenta/nueva-cuenta.component';
import { NuevaCuentaVendedorComponent } from './nueva-cuenta-vendedor/nueva-cuenta-vendedor.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { SearchComponent } from './search/search.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ContactoComponent} from './contacto/contacto.component';
import { NosotrosComponent} from './nosotros/nosotros.component';
import {InsumosComponent} from './insumos/insumos.component';
import {LogisticaComponent} from './logistica/logistica.component';
import {TurismoComponent} from './turismo/turismo.component';
import {ThumanoComponent} from './thumano/thumano.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'locales', component: LocalesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: 'nueva-cuenta', component: NuevaCuentaComponent},
  {path: 'nueva-cuenta-vendedor', component: NuevaCuentaVendedorComponent},
  {path: 'detalle-producto', component: DetalleProductoComponent },
  {path: 'nuevo-producto', component: NuevoProductoComponent },
  {path: 'search', component: SearchComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'insumos', component: InsumosComponent},
  {path: 'logistica', component: LogisticaComponent},
  {path: 'turismo', component: TurismoComponent},
  {path: 'thumano', component: ThumanoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
