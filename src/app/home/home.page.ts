import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { Storage } from '@ionic/storage';


import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
 
  ngOnInit(): void {

    this.ionViewWillEnter();
    

  }

  weather:any;
  location: {
    city: String,
    state: String
  }

  constructor(private weatherService: WeatherService,
              private storage: Storage,
              // private route: ActivatedRoute            
  ) {


  }


  

  

  ionViewWillEnter(){
   

    this.storage.get('location').then((val) => {

      if(val != null){
        this.location = JSON.parse(val);
       

      }else{
          this.location = {
            city: "Miami",
            state: "FL"
        }

      }

      this.weatherService.getWeather(this.location.city,this.location.state)
        .subscribe(weather => {
          this.weather = weather.json();


          
      console.log(weather.json());
      });

    });


    // this.location = {
    //   city: "Miami",
    //   state: "FL"
    // }

    // this.weatherService.getWeather(this.location.city,this.location.state).subscribe(weather => {
    //     this.weather = weather.json();
    //   // console.log(weather.json());

    // });

  }

}
