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
import { CostaComponent } from './costa/costa.component';
import { SierraComponent } from './sierra/sierra.component';
import { AmazoniaComponent } from './amazonia/amazonia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CostaComponent,
    SierraComponent,
    AmazoniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
