import { NgModule } from '@angular/core';
import { ModuleLevelInstacneService } from './module-level-instacne.service';
import { ModuleLevelInstacneCopyComponent } from './module-level-instacne-copy.component';
import { ModuleLevelInstacneComponent } from './module-level-instacne.component';

@NgModule({
  declarations: [
    ModuleLevelInstacneComponent,
    ModuleLevelInstacneCopyComponent,
  ],
  providers: [ModuleLevelInstacneService],
  exports: [ModuleLevelInstacneComponent, ModuleLevelInstacneCopyComponent],
})
export class ModuleLevelInstacneModule {}
