import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './homeComponent/index';
import { Component1 } from './component1/index';
import { Component2 } from './component2/index';

export const appRoutes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'post', component: Component1 },
            { path: 'post/:id', component: Component2 }
        ]
    },
];
export const routing = RouterModule.forRoot(appRoutes);