import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    selectedTabIndex = 2;

    onClickTab(index): void {
        console.log("On click tab"+index);
        this.selectedTabIndex = index;
    }

  constructor(private router: Router) { }

  ngOnInit() {
      this.router.navigate(['/profile']);
  }

}
