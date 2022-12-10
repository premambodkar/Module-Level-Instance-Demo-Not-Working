import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLevelInstacneTwoComponent } from './module-level-instacne-two.component';
import { ModuleLevelInstacneService } from '../module-level-instacne.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ModuleLevelInstacneTwoComponent],
  providers: [ModuleLevelInstacneService],
  exports: [ModuleLevelInstacneTwoComponent],
})
export class ModuleLevelInstacneTwoModule {}
