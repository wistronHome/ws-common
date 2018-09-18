import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ws-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ws-common';

    constructor() {

    }

    ngOnInit() {
        const set = new Set<string>();

        set.add('gyj');
        set.add('gyj');
        set.add('abcd');
        set.add('guanyj');

        console.log(set, set.values(), set.keys(), set.entries());

        const weak = new WeakSet();
        weak.add({id: 123, name: 'guanyj'});
        weak.add({id: 234, name: 'aefaesf'});

        console.log(weak.has({id: 123, name: 'guanyj'}));
        console.log(weak);
    }
}
