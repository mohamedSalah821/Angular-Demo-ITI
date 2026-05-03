import { Routes } from '@angular/router';
import { MainLayout } from '../components/main-layout/main-layout';
import { Home } from '../components/home/home';
import { Products } from '../components/products/products';
import { MasterProducts } from '../components/master-products/master-products';
import { ErrorPage } from '../components/error-page/error-page';
import { ProductDetails } from '../components/product-details/product-details';
import { ProductForm } from '../components/product-form/product-form';
import { Dashboard } from '../components/dashboard/dashboard';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, title: 'Login' },
    { path: 'register', component: Register, title: 'Register' },

    {
        path:'',
        component:MainLayout,
        children:[
            {path:'home' , component:Home ,title:'Home Page'},
            {path:'products' , component:Products , title:'Product Page'},
            {path:'master',component:MasterProducts , title:'Product Page'},
            {path:'details/:id',component:ProductDetails , title:'Product Details Page'},
            {path:'addproduct' ,component:ProductForm},
            {path:'Updateproduct/:id' ,component:ProductForm},
            {path:'dashboard' ,component:Dashboard,title:'Dashboard'},
            
        ]
    },
    
    {path:'**' , component:ErrorPage , title:'Error page' }
];
