import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '../../node_modules/@angular/http';
import { WeatherService } from './weather.service';

import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from './home/home.page';

import { Pro } from '@ionic/pro';



// import { MapOperator } from '../../node_modules/rxjs/internal/operators/map';

Pro.init('e890d752', {
  appVersion: 'APP_VERSION'
})

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
            AppRoutingModule, 
            HttpModule,
            HttpClientModule,
            IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    WeatherService,
    HomePage,
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
