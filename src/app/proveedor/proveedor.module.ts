import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProveedorComponent } from './components/listado-proveedor/listado-proveedor.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { MainPageProveedorComponent } from './components/main-page-proveedor/main-page-proveedor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoProveedorComponent,
    AgregarProveedorComponent,
    MainPageProveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageProveedorComponent
  ]
})
export class ProveedorModule { }
