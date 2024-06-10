import { Component, Input } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrl: './listado-proveedor.component.css'
})
export class ListadoProveedorComponent {
  @Input()
  proveedores : Proveedor[] = [
    {
      nombre : 'Merza',
      direccion : 'Calle 1',
      telefono : '1234567',
      giro : 'Viveres'
    }
  ];
}
