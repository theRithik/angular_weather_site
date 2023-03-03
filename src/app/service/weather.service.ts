import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
baseUrl:string='';
appId:string=''
units:string=''
url:string='';
  constructor(private http:HttpClient ) {
    this.baseUrl='http://api.openweathermap.org/data/2.5/'
    this.appId='b5ea0f92c5b8deb13ccec7d557ac6a4d';
    this.units='metric';
   
   }

   getWeather(city: string){
    this.url=this.baseUrl+'forecast?q='+city+'&appid='+this.appId +'&units='+this.units;
     return this.http.get(this.url);
  }
}
