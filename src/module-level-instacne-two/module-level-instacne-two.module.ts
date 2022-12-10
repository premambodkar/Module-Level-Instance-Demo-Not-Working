import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLevelInstacneTwoComponent } from './module-level-instacne-two.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModuleLevelInstacneTwoComponent],
  exports: [ModuleLevelInstacneTwoComponent],
})
export class ModuleLevelInstacneTwoModule {}
