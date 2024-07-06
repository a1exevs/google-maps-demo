import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map-component/map.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MapRoutingModule {}
