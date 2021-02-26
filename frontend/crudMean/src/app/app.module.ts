import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { CrearAutosComponent } from './crear-autos/crear-autos.component';
import { ListarAutosComponent } from './listar-autos/listar-autos.component';

// Formurlarios
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Peticiones
import { HttpClientModule } from '@angular/common/http'

//Servicios
import {AutosService} from './autos.service'

@NgModule({
  declarations: [
    AppComponent,
    CrearAutosComponent,
    ListarAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
