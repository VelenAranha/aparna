import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  
  WeatherData:any;

  constructor() { }

  ngOnInit(){
    this.WeatherData={
      main:{},
      isDay:true
    }
    this.getWeatherData();
    console.log(this.WeatherData);

  }
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=udupi&appid=cfa27c46b21352fbc56c8e592ffb6eff').then(response=>response.json())
    //let data=JSON.parse('{"coord":{"lon":74.787,"lat":13.352},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":306.17,"feels_like":312.01,"temp_min":306.17,"temp_max":306.17,"pressure":1009,"humidity":58,"sea_level":1009,"grnd_level":998},"visibility":10000,"wind":{"speed":4.66,"deg":274,"gust":4.42},"clouds":{"all":26},"dt":1645612638,"sys":{"type":1,"id":9217,"country":"IN","sunrise":1645579229,"sunset":1645621703},"timezone":19800,"id":1253952,"name":"Manipal","cod":200}')
    .then((data: any)=>{this.setWeatherData(data);});
  }
  setWeatherData(data: any){
    this.WeatherData=data;
    let sunsetTime=new Date(this.WeatherData.sys.sunset*1000);
    this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
    let currentData=new Date();
    this.WeatherData.isDay=(currentData.getTime()<sunsetTime.getTime());
    this.WeatherData.temp_celcius=(this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min=(this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max=(this.WeatherData.main.temp_max - 273.15).toFixed(0);
   
    this.WeatherData.temp_wind=(this.WeatherData.wind.speed ).toFixed(0);
    this.WeatherData.temp_visibility=(this.WeatherData.visibility/1000).toFixed(0);
  
  }
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

      text: 'Wind',
    },
    {
      iconUrl:
        '../assets/Images/inspect/weather/Web/01_Home/background/Group 10/icon_visibility_info.png',

      text: 'Visibility',
    },
  ]
  
}
