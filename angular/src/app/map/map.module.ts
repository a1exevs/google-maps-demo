import { NgModule } from '@angular/core';
import { MapComponent } from './components/map-component/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, GoogleMapsModule, MapRoutingModule],
  providers: [],
  exports: [MapComponent],
})
export class MapModule {}
