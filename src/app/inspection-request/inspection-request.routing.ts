import { Routes } from "@angular/router";
import { TabSearchComponent } from "./tab-search/tab-search.component";

export const InspectionRequestRoutes: Routes = [{
    path: 'tabsearch',
    children: [{
        path: '',
        component: TabSearchComponent
    }]
},




];
