import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarPresupuesto: boolean = false;
  mostrarGastos: boolean = false;
  presupuestoAnual: string = '';
  gastoAnual: string ='';

  mostrarPresu() {
    this.mostrarPresupuesto = !this.mostrarPresupuesto;
  }

  buscarPresupuesto() {
    console.log(`presupuesto para el mes ${this.presupuestoAnual}`);
  }

  mostrarGastosTotales() {
    this.mostrarGastos = !this.mostrarGastos;
  }

  buscarGastos() {
    console.log(`gastos del mes ${this.gastoAnual}`);
  }
}

