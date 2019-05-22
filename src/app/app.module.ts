import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatFormFieldModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
