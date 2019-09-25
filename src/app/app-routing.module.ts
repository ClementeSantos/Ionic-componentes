import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'test-page', loadChildren: './pages/test-page/test-page.module#TestPagePageModule' },
  { path: 'iconos', loadChildren: './pages/iconos/iconos.module#IconosPageModule' },
  { path: 'inputs', loadChildren: './pages/inputs/inputs.module#InputsPageModule' },
  { path: 'botonfab', loadChildren: './pages/botonfab/botonfab.module#BotonfabPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
