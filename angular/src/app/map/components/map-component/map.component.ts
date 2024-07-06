import { Component, OnInit } from '@angular/core';
import { GoogleMapsLoaderService } from '../../../common/services/google-map-loader.service';
import { defaultCenter, defaultHeight, defaultWidth, defaultZoom } from './map-component.consts';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  title = 'Google Maps in Angular';
  center = defaultCenter;
  zoom = defaultZoom;
  width = defaultWidth;
  height = defaultHeight;

  isLoaded = false;

  constructor(protected googleMapsLoaderService: GoogleMapsLoaderService) {}

  async ngOnInit(): Promise<void> {
    await this.googleMapsLoaderService.load();
    this.isLoaded = true;
  }
}
