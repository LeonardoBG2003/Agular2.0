import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarritoModule } from './carrito/carrito/carrito.module';
import { AgregarProveedorComponent } from './proveedor/components/agregar-proveedor/agregar-proveedor.component';
import { ListadoProveedorComponent } from './proveedor/components/listado-proveedor/listado-proveedor.component';
import { MainPageProveedorComponent } from './proveedor/components/main-page-proveedor/main-page-proveedor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgregarProveedorComponent,
    ListadoProveedorComponent,
    MainPageProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarritoModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
