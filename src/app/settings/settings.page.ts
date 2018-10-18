import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';


import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { NavController} from '../../../node_modules/@ionic/angular';
import { interpolationV } from '../../../node_modules/@angular/core/src/render3/instructions';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    city : String;
    state : String;

   

  constructor(private storage : Storage,
    private router: Router,
    private navController: NavController
   

  ) { 
    
      // this.city = "Miami";
      // this.state = "FL";

    
  }

  // ionViewDidLoad() {
  //   console.log('ssssssss');
  // }


  saveForm(){
    let location = {
      city : this.city,
      state : this.state

     
    }
    



    // this.storage.set('location', JSON.stringify(location));

    // console.log('ssssssssss');
    

    this.storage.set('location', JSON.stringify(location));

   

    this.navController.navigateForward('/tabs/(home:home)');

   
    
    // this.router.navigate(["/home"], this.item);
    // this.router.navigateByUrl(`home/${this.storage.get('location')}`);
    // this.router.navigate(['home']);
    
}
  ngOnInit() {

    
    this.storage.get('location').then((val) => {
      if(val != null)
      {
        
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;

       

        
      } else {
        this.city = "Miami";
        this.state = "FL";

      }
  });
  }

}
