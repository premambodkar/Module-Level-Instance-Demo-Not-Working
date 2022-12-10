import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModuleLevelInstacneModule } from '../module-level-instacne/module-level-instacne.module';
import { ModuleLevelInstacneTwoModule } from '../module-level-instacne-two/module-level-instacne-two.module';
import { ModuleLevelInstacneThreeModule } from '../module-level-instacne-three/module-level-instacne-three.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModuleLevelInstacneModule,
    ModuleLevelInstacneTwoModule,
    ModuleLevelInstacneThreeModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
