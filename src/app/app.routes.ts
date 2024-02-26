import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [

{
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component'),
    children:[
        {
            path: 'change-detection',
            title: 'change-detection',
            loadComponent:() => import('./dashboard/pages/change-detections/change-detections.component').then()
        }
        
        
    ] 
    
},
{
    path: '',
    redirectTo:'/dashboard',
    pathMatch: 'full'
}




];
