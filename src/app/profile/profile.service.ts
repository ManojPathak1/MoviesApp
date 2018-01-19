import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class ProfileService {

    constructor(private ApiService: ApiService) { }

    onClickReadNews(vm): void {
        this.ApiService.fetchNews()
            .subscribe(res => {
                if(res.status==="ok") {
                    vm.news = res.articles;
                    localStorage.setItem('News', JSON.stringify(vm.news));
                    console.log(vm.news);
                    vm.viewIndex = 1;
                }
            });
    }
}
