import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";



export const MainRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: MainComponent
    }]
}

];