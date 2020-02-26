import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkitemsgeneratorRoutingModule } from './workitemsgenerator-routing.module';
import { WorkitemsgeneratorComponent } from './workitemsgenerator.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [WorkitemsgeneratorComponent],
  imports: [
    CommonModule,
    WorkitemsgeneratorRoutingModule,
    DragDropModule
  ]
})
export class WorkitemsgeneratorModule { }
