import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-newsview',
  templateUrl: './newsview.component.html',
  styleUrls: ['./newsview.component.css']
})
export class NewsviewComponent implements OnInit {

    url: any;

  constructor(private route: ActivatedRoute, private domSanitizer : DomSanitizer) {
      console.log(this.route.snapshot.paramMap.get('id'));
      let url = this.route.snapshot.paramMap.get('id')+"?id=14";
      this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
      // this.url = this.domSanitizer.bypassSecurityResourceUrl(url).changingThisBreaksApplicationSecurity;
      console.log(this.url);
   }

  ngOnInit() {

  }

}
