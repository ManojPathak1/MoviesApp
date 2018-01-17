import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    selectedMovie = null;
    constructor() { }

    ngOnInit() {
      this.selectedMovie = JSON.parse(localStorage.getItem('SelectedMovie'));
    }

}
