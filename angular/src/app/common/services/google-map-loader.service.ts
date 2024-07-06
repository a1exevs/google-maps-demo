import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsLoaderService {
  private _loader = new Loader({
    apiKey: environment.googleMapsApiKey,
    version: 'weekly',
  });

  public load() {
    return this._loader.importLibrary('maps');
  }
}
