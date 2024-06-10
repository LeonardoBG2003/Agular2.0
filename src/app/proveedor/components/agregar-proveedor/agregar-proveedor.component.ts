import { Component } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';


@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {
  proveedor1 : Proveedor[] = [
    {
      nombre : 'Merza',
      direccion : 'Calle 1',
      telefono : '1234567',
      giro : 'Viveres'
    }
  ];
}
