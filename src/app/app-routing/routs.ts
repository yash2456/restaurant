import { Routes } from '@angular/router';
import { DishDetailsComponent } from '../dishDetails/dish-details/dish-details.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
 


export const routes:Routes=[
{
    path:'home',
    component:HomeComponent
},
{
    path:'menu',
    component:MenuComponent
},
{
    path:'contact',
    component:ContactComponent
},
{
path:'dishdetails/:id',
component:DishDetailsComponent
},
{
path:'about',
component:AboutComponent
},
{
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
},
// { path: '**', component: '' }
];