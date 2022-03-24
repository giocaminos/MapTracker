import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lvY2FtaW5vcyIsImEiOiJjbDBqeHhnMzAwaDVpM2lzZGJuZTloczlqIn0.QThTcDq_4vnOJCQOvIj1jQ';


if( !navigator.geolocation ) {
  alert('Not support the Geolocation');
  throw new Error('Not support the Geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
