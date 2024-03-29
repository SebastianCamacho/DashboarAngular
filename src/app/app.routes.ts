import { Routes } from '@angular/router';

// import ChangeDetectionsComponent from './dashboard/pages/change-detections/change-detections.component';

export const routes: Routes = [

{
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component'),
    children:[
        {
            path: 'change-detection',
            title: 'Change-detection',
            // component:  ChangeDetectionsComponent, este es un ejemplo tambien se puede llamar asi los componentes, menos eficiente
            loadComponent:() => import('./dashboard/pages/change-detections/change-detections.component')
        },{
            path: 'control-flow',
            title: 'Control-flow',
            loadComponent:() => import('./dashboard/pages/control-flow/control-flow.component')
        },{
            path: 'defer-options',
            title: 'Defer-options',
            loadComponent:() => import('./dashboard/pages/defer-options/defer-options.component')
        },{
            path: 'defer-views',
            title: 'Defer-views',
            loadComponent:() => import('./dashboard/pages/defer-views/defer-views.component')
        },{
            path: 'user/:id',
            title: 'User view',
            loadComponent:() => import('./dashboard/pages/user/user.component')
        },{
            path: 'user-list',
            title: 'User List',
            loadComponent:() => import('./dashboard/pages/users/users.component')
        },{
            path: 'view-transition',
            title: 'View-transition',
            loadComponent:() => import('./dashboard/pages/view-transition/view-transition.component')
        },{
            path:'', 
            redirectTo:'control-flow', 
            pathMatch:'full',
        }
        
        
    ] 
    
},
{
    path: '',
    redirectTo:'/dashboard',
    pathMatch: 'full'
}




];
