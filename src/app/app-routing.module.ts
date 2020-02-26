import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () =>
        import('./about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'wigenerator',
      loadChildren: () =>
        import('./workitemsgenerator/workitemsgenerator.module').then(
          m => m.WorkitemsgeneratorModule
        )
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
