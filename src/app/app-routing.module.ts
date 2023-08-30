import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  { path: 'gastos', component: GastosComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
