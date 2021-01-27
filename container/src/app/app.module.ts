import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaHostComponent } from './spa-host/spa-host.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from 'src/services/route-reuse-strategy';
import { AssetListComponent } from './asset-list/asset-list.component';
import { TestIntegrationComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    TestIntegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: MicroFrontendRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
