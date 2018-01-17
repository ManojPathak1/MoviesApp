import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class TrendsService {

    constructor(private ApiService: ApiService) { }

    onClickLogin(vm): void {
        let emailId = vm.login.emailId;
        let password = vm.login.password;
        this.auth(vm, emailId, password);
    }

    auth(vm, emailId, password): void {
        vm.isLoading = true;
        this.ApiService.auth(emailId, password)
            .subscribe(res => {
                if(res.status===200) {
                    localStorage.setItem('AuthResponse', JSON.stringify(res.response));
                    let doctorId = res.response.userid;
                    this.fetchTemplateNames(vm, doctorId);
                }
                else {
                    console.log("Network Error !");
                    vm.isLoading = false;
                }
            });
    }

    fetchTemplateNames(vm, doctorId): void {
        console.log(doctorId);
        this.ApiService.fetchTemplateNames(doctorId)
            .subscribe(res => {
                if(res.status===200) {
                    console.log(res);
                    localStorage.setItem('TemplateNames', JSON.stringify(res.response));
                    vm.viewIndex = 1;
                }
                else {
                    console.log("Network Error !");
                }
                vm.isLoading = false;
            });
    }

}
