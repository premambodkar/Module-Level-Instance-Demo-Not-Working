import { Component } from '@angular/core';
import { ModuleLevelInstacneService } from '../module-level-instacne/module-level-instacne.service';

@Component({
  selector: 'app-module-level-instacne-two',
  template: `<p>app-module-level-instacne-two
    <br>
    <span>Provided in Component Level service instance</span>
    <br>
    <span>Counter {{ service.counter }}</span>
    <br>
    <button class="btn" (click)="changeCounter()">Update Counter</button>
  </p>`,
  styles: [
    `p{
      border:thick solid green;
      padding: 10px;
      color:green;
    }
    .btn{
      padding:10px;

    }`,
  ],
  providers: [ModuleLevelInstacneService],
})
export class ModuleLevelInstacneTwoComponent {
  constructor(readonly service: ModuleLevelInstacneService) {}

  changeCounter() {
    this.service.updateCounter();
  }
}
