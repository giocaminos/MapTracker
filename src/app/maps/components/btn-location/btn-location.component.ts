import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-location',
  templateUrl: './btn-location.component.html',
  styleUrls: ['./btn-location.component.css']
})
export class BtnLocationComponent  {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService) { }

  goToLocation(){
    if(!this.placesService.isUserLocaionReady ) throw Error('Don have de ubication');
    if(!this.mapService.isMapReady) throw Error('Map Not inicialized');

    this.mapService.flyTo( this.placesService.useLocation! );

  }

}
