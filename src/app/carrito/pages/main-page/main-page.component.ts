import { Component } from '@angular/core';
import { noop } from 'rxjs';
import { Producto } from '../../carrito/interface/producto.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
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
    },
    {
      nombre : 'Gansito',
      descripcion : '50 gr',
      precio : 20.00
    },
    {
      nombre : 'Doritos',
      descripcion : '150 gr',
      precio : 24.00
    },
    {
      nombre : 'Cheetos',
      descripcion : '150 gr',
      precio : 22.50
    }
  ]

  public onNewProducto(producto : Producto){
    console.log('Desde el main');
    console.table(producto);
    this.productos.push(producto);
  }
}
