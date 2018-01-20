import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
 import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TrendsComponent } from './trends/trends.component';
import { ApiService } from './api.service';
import { AuthInterceptor } from './AuthInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TrendsService } from './trends/trends.service';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TemplatesComponent } from './templates/templates.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { NewsComponent } from './news/news.component';
import { NewsviewComponent } from './newsview/newsview.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    HomeComponent,
    MovieDetailComponent,
    TrendsComponent,
    TemplatesComponent,
    ProfileComponent,
    NewsComponent,
    NewsviewComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FormsModule
    /* StoreModule.provideStore({

    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension() */
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule],
  providers: [ApiService, TrendsService, ProfileService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
