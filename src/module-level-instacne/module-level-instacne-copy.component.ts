import { Component } from '@angular/core';
import { ModuleLevelInstacneService } from './module-level-instacne.service';

@Component({
  selector: 'app-module-level-instacne-copy',
  template: `<p>app-module-level-instacne-copy
    <br>
    <span>Provided in Module Level service instance</span>
    <br>
    <span>Counter {{ service.counter }}</span>
    <br>
    <button class="btn" (click)="changeCounter()">Update Counter</button>
  </p>`,
  styles: [
    `p{
      border:thick solid blue;
      padding: 10px;
      color:blue;
    }
    .btn{
      padding:10px;

    }`,
  ],
})
export class ModuleLevelInstacneCopyComponent {
  constructor(readonly service: ModuleLevelInstacneService) {}

  changeCounter() {
    this.service.updateCounter();
  }
}
