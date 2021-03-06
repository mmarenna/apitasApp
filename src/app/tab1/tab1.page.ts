import { Component, OnInit } from '@angular/core';
import { PerritosService } from '../services/perritos.service';
import { PerroDTO } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listadoPerritos: PerroDTO[] = [];

  constructor( private perritosService: PerritosService ) {}
  
  ngOnInit() {
    this.perritosService.getListadoPerritos().subscribe( response => {
      this.listadoPerritos = response;
      console.log('response', this.listadoPerritos);
    });
  }

}
