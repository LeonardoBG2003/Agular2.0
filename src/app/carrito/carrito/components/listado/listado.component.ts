import { Component, Input } from '@angular/core';
import { Producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @Input()
  public productos : Producto[] = [
    {
      nombre : 'Coca Cola',
      descripcion : '600 ml',
      precio : 19.50
    },
    {
      nombre : 'Pepsi',
      descripcion : '600 ml',
      precio : 15.50
    },
    {
      nombre : 'Fanta',
      descripcion : '400 ml',
      precio : 17.50
    }
  ]
}
