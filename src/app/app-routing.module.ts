import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './trends/trends.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsviewComponent } from './newsview/newsview.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'moviedetail', component: MovieDetailComponent },
    { path: 'trends', component: TrendsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'newsview/:id', component: NewsviewComponent},
    { path: 'weather', component: WeatherComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
