import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MapService } from '.';
import { IPTracker } from '../interfaces/ipTracker';
import { Feature, PlacesResponse } from '../interfaces/placesresponse';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number] ;
  
  urlMapbox:string = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  urlIpTracker:string = 'http://ip-api.com/json/';

  get isUserLocaionReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private http: HttpClient, private mapService: MapService) { 
    this.getUserLocation();
  }

  public getUserLocation(): Promise<[number, number]>{
    return new Promise((resolve, reject ) =>{

      navigator.geolocation.getCurrentPosition(
        
        ( { coords }) => {
          this.useLocation = [coords.latitude, coords.latitude];
          resolve(this.useLocation)
        },
        ( err ) => {
          alert('Not get the Geolocation');
          console.log(err);
          reject();
        }
      );

    })
  }

  public track:  IPTracker = { status:      '',
  country:     '',
  countryCode: '',
  region:      '',
  regionName:  '',
  city:        '',
  zip:         '',
  lat:         0,
  lon:         0,
  timezone:    '',
  isp:         '',
  org:         '',
  as:          '',
  query:       ''} ;
  public places:  Feature[] = [];
  getPlacesByQuery( query: string =''){
    
    if(query.trim().length>0){
      this.http.get<IPTracker>(this.urlIpTracker +query )
      .subscribe( resp => {
        this.track = resp;

        this.getPlacesByQueryMapBox(resp.lat,resp.lon)  ;
      });
    }
   
  }
  getPlacesByQueryMapBox(lat: number, lon: number){
    this.http.get<PlacesResponse>(this.urlMapbox+`${ lon },${ lat }.json?limit=1&access_token=${ environment.apiKey }`)
    .subscribe( rsp => {
      this.places = rsp.features;

      this.mapService.crearMarkerFromPlace( this.places);

      this.mapService.flyTo([ lon, lat])
    });
  }

}
