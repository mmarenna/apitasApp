import { Component, OnInit, Input } from '@angular/core';
import { PerroDTO } from '../../../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-adopcion',
  templateUrl: './slideshow-adopcion.component.html',
  styleUrls: ['./slideshow-adopcion.component.scss'],
})
export class SlideshowAdopcionComponent implements OnInit {

  @Input() perritosAdopcion: PerroDTO[]= [];

  slideOpts = {
    slidersPerView: 1.3,
    freeMode:true,
    spaceBetween: -5 
  };
  
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: number){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
    
  }

}
