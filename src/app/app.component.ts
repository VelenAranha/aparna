import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shoppy'
  data: any
  properties = [
    {
      iconUrl:
        '../assets/Images/inspect/weather/Web/01_Home/background/Group 6 Copy/icon_temperature_info.png',
      text: 'Min-Max',
    },
    {
      iconUrl:
        '../assets/Images/inspect/weather/Web/01_Home/background/Group 6/icon_precipitation_info.png',
      text: 'Precipitation',
    },
    {
      iconUrl:
        '../assets/Images/inspect/weather/Web/01_Home/background/Group 8/icon_humidity_info.png',
      text: 'Humidity',
    },
    {
      iconUrl:
        '../assets/Images/inspect/weather/Web/01_Home/background/Group 9/icon_wind_info.png',

      text: 'wind',
    },
    {
      iconUrl:
        '../assets/Images/inspect/weather/Web/01_Home/background/Group 10/icon_visibility_info.png',

      text: 'Visibility',
    },
  ]
}
