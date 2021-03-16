import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { GoogleMapsDemoComponent } from './google-map/google-maps-demo.component';
import { MapComponent } from './map/map.component';
import { TestIntegrationComponent } from './test.component';


const routes: Routes = [{
    path: 'child1',
    children: [{
      path: '**',
      loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
      data: { app: 'child1' }
    }]
  }, {
    path: '',
    component: AssetListComponent,
    pathMatch: 'full',
    children: [
      // Empty route with single-spa produces undefined 'routes' error
      // {
      //   path: '',
      //   outlet: 'single-spa',
      //   loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
      //   data: { app: 'child2' }
      // },
      // Empty Path without single-spa works fine.
      {
        path: '',
        outlet: 'single-spa',
        component: TestIntegrationComponent
      }
    ]
  },
  {
      path: 'map',
      component: MapComponent
  },
  {
      path: 'gmap',
      component: GoogleMapsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
