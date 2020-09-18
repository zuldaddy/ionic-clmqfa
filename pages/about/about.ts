import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',

})
export class AboutPage {
public BTA:number;
public PT: number;
public TIP: number; 
public MP: number;
public TA: number;

  constructor(public navCtrl: NavController) {

  }


compute() {
  this.TIP= (this.BTA * 0.015) * this.PT;
  this.TA = parseInt(this.BTA) + parseInt(this.TIP); 
  this.MP= (this.TA / this.PT);

}


}
