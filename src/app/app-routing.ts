import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
}, {
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    loadChildren: './main/main.module#MainModule'
  }, {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },]
},
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [{
  //     path: 'pages',
  //     loadChildren: './pages/pages.module#PagesModule'
  //   }]
  // }
];


