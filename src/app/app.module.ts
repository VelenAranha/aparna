import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import {HttpClientModule}from '@angular/common/http'
import { NgModule } from '@angular/core'
import { WeatherDetailsComponent } from './weather-details/weather-details.component'
import { WeatherHeaderComponent } from './weather-header/weather-header.component'
import { WeatherLogoComponent } from './weather-logo/weather-logo.component'
import { WeatherSearchBarComponent } from './weather-search-bar/weather-search-bar.component';


import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    WeatherHeaderComponent,
    WeatherSearchBarComponent,
    WeatherLogoComponent,
    WeatherDetailsComponent,
   
    
    
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
