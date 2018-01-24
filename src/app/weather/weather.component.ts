import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {} from '@types/googlemaps'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    constructor(private ApiService: ApiService) { }

    ngOnInit() {

    }

    weather: any;
    temp: string;
    name: string;
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
                this.weather = res;
                this.temp = (this.weather.main.temp-273).toFixed(2);
                this.name = this.weather.name;
                this.implementMap(lat, lon);
            });
    }

    implementMap(lat, lon): void {
        var mapOptions = {
            center: new google.maps.LatLng(lat, lon),
            zoom: 15
        }
        var map = new google.maps.Map(document.getElementById("mapContainer"), mapOptions);
        var marker = new google.maps.Marker({
          position: {lat: lat, lng: lon},
          map: map
        });
    }

    ngAfterViewInit() {
        this.getLocation();
        // this.getWeather(28.63, 77.37);
    }
}
