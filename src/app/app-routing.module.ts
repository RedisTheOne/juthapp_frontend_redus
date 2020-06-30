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
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
      }
    ]
  },
  {
    path: 'friends',
    children: [
      {
        path: '',
        loadChildren: () => import('./friends/friends.module').then( m => m.FriendsModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
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
