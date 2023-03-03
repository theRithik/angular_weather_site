import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
 constructor(private _weather:WeatherService){}
  ngOnInit():void{
    this._weather.getWeather('bangalore').subscribe((val)=>{
      this.weatherHtml=val
      console.log(val)
   })
  }
cityname:string=''
weatherHtml:any='';

onSubmit(){
this._weather.getWeather(this.cityname).subscribe((val)=>{
   this.weatherHtml=val
   console.log(val)
},
(err)=>{
  console.log(err)
  alert(err.error.message);
  
})
}
}

