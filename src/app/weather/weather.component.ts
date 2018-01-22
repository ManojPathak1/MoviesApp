import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    constructor(private ApiService: ApiService) { }

    ngOnInit() {
        this.getLocation();
    }

    getLocation(): void {
        let vm = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                vm.getWeather(position.coords.latitude, position.coords.longitude);
            });
        }
        else {
            console.log("Failure");
        }
    }

    getWeather(lat, lon): void {
        this.ApiService.getWeather(lat, lon)
            .subscribe((res)=> {
                console.log(res);
            });
    }
}
