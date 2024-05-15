import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AddClientComponent } from './pages/contabilidad/add-client/add-client.component';
import { ClientCatalogcontComponent } from './pages/contabilidad/client-catalogcont/client-catalogcont.component';
import { ContPaymentsComponent } from './pages/contabilidad/cont-payments/cont-payments.component';
import { ReportAtrasoComponent } from './pages/contabilidad/report-atraso/report-atraso.component';
import { ReportRegimenComponent } from './pages/contabilidad/report-regimen/report-regimen.component';
import { ReportDomicilioComponent } from './pages/contabilidad/report-domicilio/report-domicilio.component';
import { ReportContrasenasComponent } from './pages/contabilidad/report-contrasenas/report-contrasenas.component';
import { ReportReimpresionComponent } from './pages/contabilidad/report-reimpresion/report-reimpresion.component';
import { ReportUltpagosComponent } from './pages/contabilidad/report-ultpagos/report-ultpagos.component';
import { GraphicsComponent } from './pages/contabilidad/graphics/graphics.component';
import { EspecialesComponent } from './pages/contabilidad/especiales/especiales.component';
import { AddClientPresComponent } from './pages/prestamos/add-client-pres/add-client-pres.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'principal',component: PrincipalComponent},
    {path: 'addClient',component: AddClientComponent},
    {path: 'pagosCont',component: ContPaymentsComponent},
    {path: 'reportePagos',component: ContPaymentsComponent},
    {path: 'catalogcont',component: ClientCatalogcontComponent},
    {path: 'reporteAtraso',component: ReportAtrasoComponent},
    {path: 'reporteRegimen',component: ReportRegimenComponent},
    {path: 'reporteDomicilio',component: ReportDomicilioComponent},
    {path: 'reporteContrasena',component: ReportContrasenasComponent},
    {path: 'reporteReimpresion',component: ReportReimpresionComponent},
    {path: 'reporteUltimos',component: ReportUltpagosComponent},
    {path: 'graficasCont',component: GraphicsComponent},
    {path: 'opcionesEspeciales',component: EspecialesComponent},
    {path: 'addClientPres', component: AddClientPresComponent},
    {path: '**', redirectTo:'login'}
];
