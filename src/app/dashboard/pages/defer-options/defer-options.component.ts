import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { HeavyLoadersFastComponent } from "../../../shared/heavy-loaders/heavy-loaders-fast.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-defer-options',
    standalone: true,
    templateUrl: './defer-options.component.html',
    imports: [TitleComponent, HeavyLoadersFastComponent, CommonModule]
})
export default class DeferOptionsComponent {

}
