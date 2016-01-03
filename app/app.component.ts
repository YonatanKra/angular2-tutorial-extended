import {Component} from 'angular2/core';
import {TestPipe} from './pipes/testPipe';
import {HeroesListComponent} from './heroes/heroes-list.component';

@Component({
    selector: 'my-app',
    template: `<input [(ngModel)]="myName">
                <div>Who's D Man?</div>
                <h1>{{myName | test}}</h1>
                <heroes-list></heroes-list>`,
    pipes: [TestPipe],
    directives: [HeroesListComponent]
})

export class AppComponent {
    public myName = 'Einstein';
}