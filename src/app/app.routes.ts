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
    path: 'crops',
    loadComponent: () => 
        {return import('./components/crops/crops').then((m) => m.Crops);
        }
},
{
    path: 'cattle',
    loadComponent: () => 
        {return import('./components/cattle/cattle').then((m) => m.Cattle);
        }
},
{
    path: 'drip',
    loadComponent: () => 
        {return import('./components/drip/drip').then((m) => m.Drip);
        }
},
{
    path: 'machines',
    loadComponent: () => 
        {return import('./components/machines/machines').then((m) => m.Machines);
        }
},
{
    path: 'iot',
    loadComponent: () => 
        {return import('./components/iot/iot').then((m) => m.Iot);
        }
},
{
   path: 'dashboard',
   loadComponent: () => 
       {return import('./dashboard/dashboard').then((m) => m.Dashboard);
       }
},
{
    path: 'about',
    loadComponent: () => 
        {return import('./components/about/about').then((m) => m.About);
        }
},
{   path: 'contact',
    loadComponent: () => 
        {return import('./components/contact/contact').then((m) => m.Contact);
        }
},
{
    path: 'crops/fruits/promogranate',
    loadComponent: () => 
        {return import('./components/crops/fruites/promogranate/promogranate').then((m) => m.Promogranate);
        }
},
{
    path: 'crops/fruits/banana',
    loadComponent: () => 
        {return import('./components/crops/fruites/banana/banana').then((m) => m.Banana);
        }
},
{
    path: 'crops/fruits/mango',
    loadComponent: () => 
        {return import('./components/crops/fruites/mango/mango').then((m) => m.Mango);
        }
}
];
