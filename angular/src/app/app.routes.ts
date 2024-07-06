import { Routes } from '@angular/router';
import { MapComponent } from './map/components/map-component/map.component';

export const routes: Routes = [{ path: '', loadChildren: () => import('./map/map.module').then(m => m.MapModule) }];
