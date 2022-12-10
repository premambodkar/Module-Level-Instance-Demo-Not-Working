import { NgModule } from '@angular/core';
import { ModuleLevelInstacneService } from '../module-level-instacne.service';
import { ModuleLevelInstacneComponent } from './module-level-instacne.component';

@NgModule({
  declarations: [ModuleLevelInstacneComponent],
  providers: [ModuleLevelInstacneService],
  exports: [ModuleLevelInstacneComponent],
})
export class ModuleLevelInstacneModule {}
