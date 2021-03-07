import { Component, OnInit, Input } from '@angular/core';
import { PerroDTO } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-adopcion',
  templateUrl: './slideshow-adopcion.component.html',
  styleUrls: ['./slideshow-adopcion.component.scss'],
})
export class SlideshowAdopcionComponent implements OnInit {

  @Input() perritosAdopcion: PerroDTO[]= [];

  slideOpts = {
    slidersPerView: 1.3,
    freeMode:true
  };
  
  constructor() { }

  ngOnInit() {}

}
