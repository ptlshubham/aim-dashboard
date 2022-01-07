import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDashboardComponent } from './dashboard/index-dashboard/index-dashboard.component';
import { TabSearchComponent } from './inspection-request/tab-search/tab-search.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
	  },{
		path:'login',
		component:LoginComponent
	  },
	  {
		  path:'tabsearch',
		  component:TabSearchComponent
	  },
	  {
		path:'dashboard',
		component:IndexDashboardComponent
	  },

	 {
		path: 'main',
		component: MainComponent,
		children: [
		{
		  path: 'main',
		  loadChildren: './main/main.module#MainModule'
		},
		
	]
	  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
	useHash: true
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
