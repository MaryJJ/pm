import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkitemsgeneratorComponent } from './workitemsgenerator.component';

const routes: Routes = [{ path: '', component: WorkitemsgeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkitemsgeneratorRoutingModule {}
