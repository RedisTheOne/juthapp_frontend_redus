import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'juthapp',
    children: [
      {
        path: 'gigamarket',
        loadChildren: () => import('./market/gigamarket/gigamarket.module').then( m => m.GigamarketModule)
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'juthapp',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
