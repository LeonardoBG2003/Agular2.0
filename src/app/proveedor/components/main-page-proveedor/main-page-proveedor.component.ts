import { Component } from '@angular/core';
import { AgregarProveedorComponent } from '../agregar-proveedor/agregar-proveedor.component';
import { Proveedor } from '../../interfaces/proveedor.interface';

@Component({
  selector: 'app-main-page-proveedor',
  templateUrl: './main-page-proveedor.component.html',
  styleUrl: './main-page-proveedor.component.css'
})
export class MainPageProveedorComponent {
  proveedores : Proveedor[] = [
    {
      nombre : 'Merza',
      direccion : 'Calle 1',
      telefono : '1234567',
      giro : 'Viveres'
    },
    {
      nombre : 'Abarrotes Lupita',
      direccion : 'Calle 2',
      telefono : '7654321',
      giro : 'Viveres'
    },
    {
      nombre : 'Carniceria Juan',
      direccion : 'Calle 3',
      telefono : '9876543',
      giro : 'Carnicos'
    }
  ];
}
