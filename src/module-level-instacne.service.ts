import { Injectable } from '@angular/core';

@Injectable()
export class ModuleLevelInstacneService {
  counter = 0;
  constructor() {}

  updateCounter() {
    this.counter++;
  }
}
