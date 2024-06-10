import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    AgregarProductoComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CarritoModule { }