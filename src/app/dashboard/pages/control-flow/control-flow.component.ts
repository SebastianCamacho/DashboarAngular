import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { nextTick } from 'process';

type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte','Qwik', 'React']);
  public frameworks2 = signal(['Angular']);
  
  public toggleContent(){
    this.showContent.update(value=>!value);
  }

  public toggleNote_A(){
    this.grade.set('A');
  }
  public toggleNote_B(){
    this.grade.set('B');
  }
  public toggleNote_F(){
    this.grade.set('F');
  }

}
