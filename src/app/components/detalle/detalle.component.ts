import { Component, OnInit, Input } from '@angular/core';
import { PerritosService } from '../../services/perritos.service';
import { PerroDTO } from '../../../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  perroDetalle: PerroDTO;
  oculto = 150;
  constructor( private perritoService: PerritosService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.perritoService.getPerritoDetalle(this.id).subscribe(response => {
      this.perroDetalle = response;
    });
  }

  regresar(){
    this.modalCtrl.dismiss();
  }
}
