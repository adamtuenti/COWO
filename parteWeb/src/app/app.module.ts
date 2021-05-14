import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { LocalesComponent } from './locales/locales.component';
import { ProductosComponent } from './productos/productos.component';
import {MatListModule} from '@angular/material/list';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatGridListModule } from '@angular/material/grid-list';
import { SeleccionarRegistroComponent } from './folder/seleccionar-registro/seleccionar-registro.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NuevaCuentaComponent } from './nueva-cuenta/nueva-cuenta.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { SearchComponent } from './search/search.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuevaCuentaVendedorComponent } from './nueva-cuenta-vendedor/nueva-cuenta-vendedor.component';
import { InsumosComponent } from './insumos/insumos.component';
import { LogisticaComponent } from './logistica/logistica.component';
import { TurismoComponent } from './turismo/turismo.component';
import { ThumanoComponent } from './thumano/thumano.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CategoriasComponent,
    ProvinciasComponent,
    LocalesComponent,
    ProductosComponent,
    SeleccionarRegistroComponent,
    CrearCuentaComponent,
    NuevaCuentaComponent,
    DetalleProductoComponent,
    SearchComponent,
    NuevoProductoComponent,
    ContactoComponent,
    NosotrosComponent,
    NuevaCuentaVendedorComponent,
    InsumosComponent,
    LogisticaComponent,
    TurismoComponent,
    ThumanoComponent
  ],
  imports: [
    IvyCarouselModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    HttpClientModule,
    MatGridListModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
