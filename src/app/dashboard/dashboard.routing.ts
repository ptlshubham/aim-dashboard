import { Routes } from "@angular/router";
import { IndexDashboardComponent } from "./index-dashboard/index-dashboard.component";
import { ResultDashboardComponent } from "./result-dashboard/result-dashboard.component";


export const DashboardRoutes: Routes = [{
    path: 'dashboard',
    children: [{
        path: '',
        component: IndexDashboardComponent
    }]
},
{
    path: '',
    children: [{
        path: 'dashboard/result',
        component: ResultDashboardComponent
    }]
},



];
