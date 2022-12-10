import { Component } from '@angular/core';
import { ModuleLevelInstacneService } from '../module-level-instacne.service';

@Component({
  selector: 'app-module-level-instacne-three',
  template: `<p>app-module-level-instacne-three
  <br>
    <span>Counter {{ service.counter }}</span>
    <br>
    <button class="btn" (click)="changeCounter()">Update Counter</button>
  </p>`,
  styles: [
    `p{
      border:thick solid red;
      padding: 10px;
      color:red;
    }
    .btn{
      padding:10px;

    }`,
  ],
})
export class ModuleLevelInstacneThreeComponent {
  constructor(readonly service: ModuleLevelInstacneService) {}

  changeCounter() {
    this.service.updateCounter();
  }
}
