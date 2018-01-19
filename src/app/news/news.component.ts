import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    let hammertime = new Hammer(document.getElementById(''));
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    news = [];
    selectedIndex:number = 0;
    constructor() { }

    ngOnInit() {
        this.news = JSON.parse(localStorage.getItem('News'));
    }


    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight'};


    // action triggered when user swipes
    swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {

    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isLast = currentIndex === this.news.length - 1;
        this.selectedIndex = isLast ? 0 : currentIndex + 1;
        console.log(this.selectedIndex);
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
        const isFirst = currentIndex === 0;
        this.selectedIndex = isFirst ? this.news.length - 1 : currentIndex - 1;
        console.log(this.selectedIndex);
    }

    }

}
