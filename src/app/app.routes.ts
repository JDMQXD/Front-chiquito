import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login',component: LoginComponent},
    {path: 'principal', component: MenuPrincipalComponent}
    
];
