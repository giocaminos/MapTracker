import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TopscreemComponent } from './components/topscreem/topscreem.component';
import { BtnLocationComponent } from './components/btn-location/btn-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { NameComponent } from './components/name/name.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    TopscreemComponent,
    BtnLocationComponent,
    SearchBarComponent,
    SearchResultComponent,
    NameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    MapScreenComponent
  ]
})
export class MapsModule { }
