import { BrowserModule , Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { DatePipe } from '@angular/common';
import { ApiService } from './core/services/api.service';
import { UtilsService } from './core/services/utils.service';
import { FilterSortService } from './core/services/filter-sort.service';

//import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './pages/callback/callback.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { ParticipantComponent } from './pages/participants/participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent,
    ParticipantsComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule.forRoot(), 
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    Title,
    AuthService, 
    DatePipe, 
    ApiService,
    UtilsService, 
    FilterSortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
