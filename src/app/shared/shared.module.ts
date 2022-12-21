import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PrimngModule } from './primng/primng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, PrimngModule],
})
export class SharedModule {}
