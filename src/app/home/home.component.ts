import { Component, OnInit } from '@angular/core';
import { moviesArr } from '../mock-movies.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    movies = moviesArr;

    onClickMovie(movie) {
        localStorage.setItem('SelectedMovie', JSON.stringify(movie));
    }

    constructor() { }

    ngOnInit() {
    }

}
