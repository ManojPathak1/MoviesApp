import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import 'rxjs/add/operator/catch';
import { Login } from '../models/Login';
import { TrendsService } from './trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

    constructor(private trendsService: TrendsService) { }

    ngOnInit() {
        /* this.ApiService.getUsers()
            .subscribe(data => {
                console.log(data)
            }); */
    }

    isLoading: boolean = false;
    viewIndex: number = 0;

    @Input() login: Login = {
        emailId: null,
        password: null
    };

    onClickLogin(): void {
        this.trendsService.onClickLogin(this);
    }

    /* auth(emailId, password): void {
        this.isLoading = true;
        let emailId = this.login.emailId;
        let password = this.login.password;
        this.ApiService.auth(emailId, password)
            .subscribe(res => {
                if(res.status===200) {
                    localStorage.setItem('AuthResponse', JSON.stringify(res.response));
                }
                else {
                    console.log("Network Error !");
                    this.isLoading = false;
                }
            });
    } */

    /* fetchTemplates(): void {

    } */

}
