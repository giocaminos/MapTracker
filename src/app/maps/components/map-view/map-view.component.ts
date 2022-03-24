import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Marker, Popup} from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef
  constructor(private palcesService: PlacesService,
    private mapService: MapService) { 

  }

  ngAfterViewInit(): void {

    if( !this.palcesService.useLocation ) throw Error('do not have a any places')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.palcesService.useLocation,
      zoom: 14,
      });

      
    const popup = new Popup()
    .setHTML(`
      <h6>I am here</h6>
      <span>I am in this country</span>
    `);

    new Marker({ color: 'red'})
    .setLngLat( this.palcesService.useLocation )
    .setPopup( popup )
    .addTo( map )

    this.mapService.setMap( map );
  }



}
