import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-change-detections',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, CommonModule],
    template:`
    <app-title [titulo]="currentFramework()"></app-title>

        <pre>{{frameworkAsSignal() | json }}</pre>

        <pre>{{ frameworkAsProperity | json }}</pre>
    `
    
})
export default class ChangeDetectionsComponent {

    public currentFramework = computed(
        () => `Change detection - ${this.frameworkAsSignal().name}`
    );

    public frameworkAsSignal = signal({
        name: 'Angular',
        releaseData: 2016
    });

    public frameworkAsProperity = {
        name: 'Angular',
        releaseData: 2016
    };

    constructor() {

        setTimeout(() => {

            //this.frameworkAsProperity.name = 'React';
            this.frameworkAsSignal.update(value => ({...value, name:'React'}))
            console.log('Hecho')

        }, 3000)


    }


}
