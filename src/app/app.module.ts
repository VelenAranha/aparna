import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { WeatherHeaderComponent } from './weather-header/weather-header.component'
import { WeatherLogoComponent } from './weather-logo/weather-logo.component'
import { WeatherSearchBarComponent } from './weather-search-bar/weather-search-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherHeaderComponent,
    WeatherSearchBarComponent,
    WeatherLogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
