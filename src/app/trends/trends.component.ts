import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import 'rxjs/add/operator/catch';
import { Login } from '../models/Login.ts';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

    data = "";

    @Input() login: Login = {
        emailId: null,
        password: null
    };

    onClickLogin(): void {
        console.log("On click login.");
    }

    constructor(private ApiService: ApiService) { }

    ngOnInit() {
        this.ApiService.getUsers()
            .subscribe(data => {
                console.log(data)
            });
    }

}
