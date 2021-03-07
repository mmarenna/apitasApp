import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowAdopcionComponent } from './slideshow-adopcion/slideshow-adopcion.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  entryComponents:[DetalleComponent],
  declarations: [SlideshowAdopcionComponent, DetalleComponent, HeaderComponent],
  exports: [SlideshowAdopcionComponent, DetalleComponent, HeaderComponent],
  imports: [
    CommonModule, IonicModule,
  ]
})
export class ComponentsModule { }
