import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => 
    {
        return import('./home/home').then((m) => m.Home);
    },
},
{
    path: 'greeting',
    loadComponent: () => 
        {return import('./components/greeting/greeting').then((m) => m.Greeting);
        }
}
];
