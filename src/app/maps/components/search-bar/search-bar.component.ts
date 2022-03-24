
import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  constructor(private placeService: PlacesService) { }


  getPlacesByQuery( query: string){
    
    this.placeService.getPlacesByQuery( query );
  }
  
}
