import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowAdopcionComponent } from './slideshow-adopcion/slideshow-adopcion.component';



@NgModule({
  declarations: [SlideshowAdopcionComponent],
  exports: [SlideshowAdopcionComponent],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentsModule { }
