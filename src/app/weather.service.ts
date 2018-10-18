import { Injectable } from '@angular/core';


// import { HttpClient } from '@angular/common/http';

import { Http } from '../../node_modules/@angular/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor(public http: Http) { 
    console.log("Hello Weather Service");
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }
  // return this.http.get(this.url+'/'+state+'/'+city+'.json')   ;

  getWeather(city, state) {

   
    // return this.http.get("http://api.wunderground.com/api/99dfe35fcb7de1ee/conditions/q/CA/San_Francisco.json");//.map(res => res.json());

     return this.http.get(this.url+'/'+state+'/'+city+'.json');

  }
}
