import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CategoriasComponent,
    ProvinciasComponent,
    LocalesComponent,
    ProductosComponent
  ],
  imports: [
    IvyCarouselModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
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
