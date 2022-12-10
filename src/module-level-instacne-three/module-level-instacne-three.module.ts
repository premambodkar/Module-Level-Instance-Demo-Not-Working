import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLevelInstacneThreeComponent } from './module-level-instacne-three.component';
import { ModuleLevelInstacneService } from '../module-level-instacne/module-level-instacne.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ModuleLevelInstacneThreeComponent],
  providers: [ModuleLevelInstacneService],
  exports: [ModuleLevelInstacneThreeComponent],
})
export class ModuleLevelInstacneThreeModule {}
