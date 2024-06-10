import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  @Output()
  onNewProducto : EventEmitter<Producto> = new EventEmitter;
  public producto : Producto = 
    {
      nombre : 'Coca Cola',
      descripcion : '600 ml',
      precio : 19.50
    };

  public emitProducto() : void {
    console.table(this.producto);
    if(this.producto.nombre.length == 0)
      return;

    this.onNewProducto.emit(this.producto);
    this.producto.nombre = '';
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }
}
