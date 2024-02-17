import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ClientCatalogComponent } from './pages/client-catalog/client-catalog.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'principal',component: PrincipalComponent},
    {path:'addClient', component:AddClientComponent},
    {path: 'catalogo_clientes', component: ClientCatalogComponent},
    {path: 'pagos',component: PagosComponent},
    {path: '**', redirectTo:'principal'}
];
