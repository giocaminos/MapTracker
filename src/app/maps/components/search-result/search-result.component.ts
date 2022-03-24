import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapService, PlacesService } from '../../services';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit{

  public screenSmall:boolean = true;
  constructor(public placesServices: PlacesService, private mapService: MapService) {
    
    if(screen.width >= 376)
      this.screenSmall = true;
    else
      this.screenSmall = false;

   }

  ngOnInit(): void {
    
  }
 
   /*get places():IPTracker {
     console.log('get');
   if(this.placesServices.track.lat != 0)
      this.flyto( this.placesServices.track)
    
     return this.placesServices.track;
     
  }

  flyto( place: IPTracker){
  
    this.mapService.flyTo([ place.lon, place.lat])
  }*/
}
