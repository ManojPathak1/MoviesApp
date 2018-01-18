import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private profileService: ProfileService) { }

    ngOnInit() {

    }

    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight'};

    viewIndex: number = 0;
    selectedIndex:number = 0;

    news = [];

    // our list of avatars
    avatars = [
        {
            name: 'kristy',
            image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
            visible: true
        },
        {
            name: 'matthew',
            image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
            visible: false
        },
        {
            name: 'chris',
            image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
            visible: false
        },
        {
            name: 'jenny',
            image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
            visible: false
        }
    ];

    // action triggered when user swipes
    swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {

        // swipe right, next avatar
        if (action === this.SWIPE_ACTION.RIGHT) {
            const isLast = currentIndex === this.avatars.length - 1;
            this.selectedIndex = isLast ? 0 : currentIndex + 1;
            console.log(this.selectedIndex);
        }

        // swipe left, previous avatar
        if (action === this.SWIPE_ACTION.LEFT) {
            const isFirst = currentIndex === 0;
            this.selectedIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
            console.log(this.selectedIndex);
        }

    }

    onClickReadNews(): void {
        console.log("On Click Read News");
        this.profileService.onClickReadNews(this);
    }

}
