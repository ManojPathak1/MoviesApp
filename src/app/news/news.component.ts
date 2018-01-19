import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    /* let hammertime = new Hammer(document.getElementById(''));
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL }); */
    news = [];
    selectedIndex:number = 0;
    constructor(private router: Router) { }

    ngOnInit() {
        this.news = JSON.parse(localStorage.getItem('News'));
    }

    ngAfterViewInit(){
        let myElement = document.getElementById('newsElement');
        var mc = new Hammer.Manager(myElement, {
    recognizers: [
        // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
        [Hammer.Rotate],
        [Hammer.Pinch, { enable: false }, ['rotate']],
        [Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL }],
    ]
    });
    let vm = this;
    mc.on("swipe", function(ev) {
        console.log(ev);
    	if(ev.offsetDirection===16) {
            vm.swipe(vm.SWIPE_ACTION.DOWN);
        }
        else if(ev.offsetDirection===8) {
            vm.swipe(vm.SWIPE_ACTION.UP);
        }
    });
    }

    SWIPE_ACTION = { UP: 'swipeup', DOWN: 'swipedown', RIGHT: 'swiperight', LEFT: 'swipeleft'};


    // action triggered when user swipes
    swipe(action = this.SWIPE_ACTION.RIGHT) {

    // console.log(currentIndex);
    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isLast = this.selectedIndex === this.news.length - 1;
        this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
        console.log(this.selectedIndex);
    }

    // swipe left, previous avatar
    else if (action === this.SWIPE_ACTION.LEFT) {
        /* const isFirst = this.selectedIndex === 0;
        this.selectedIndex = isFirst ? this.news.length - 1 : this.selectedIndex - 1;
        console.log(this.selectedIndex); */
        // window.location.href = this.news[this.selectedIndex].url;
        this.router.navigate(['/newsview', this.news[this.selectedIndex].url]);
    }

    else if(action === this.SWIPE_ACTION.UP) {
        const isFirst = this.selectedIndex === 0;
        this.selectedIndex = isFirst ? this.news.length - 1 : this.selectedIndex - 1;
        console.log(this.selectedIndex);
    }

    else if(action === this.SWIPE_ACTION.DOWN) {
        const isLast = this.selectedIndex === this.news.length - 1;
        this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
        console.log(this.selectedIndex);
    }

    }

}
