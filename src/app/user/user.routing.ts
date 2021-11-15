import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";



export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'user/login',
        component: LoginComponent
    }

    ]
}
    // ,
    // {
    //     path: '',
    //     children: [{
    //         path: 'subject',
    //         component: SubjectComponent
    //     }]
    // },


];
