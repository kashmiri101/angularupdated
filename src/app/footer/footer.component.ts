import { Component, OnInit } from '@angular/core';
import {  faMailForward, faCircleCheck, faArrowRightLong, faF, faHeart, faPlay, faCompress, faArrowLeft, faArrowRight, faUser, faCarSide, faLocationDot, faEnvelope, faCaretRight, faXmark, faPlus, faHandPointer, faCartPlus, faStar, faPhone, faLocation, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay, faWhatsapp, faLinkedin, faInstagram,  faTwitter, faFacebook, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';

import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faMailForward=faMailForward;
  faArrowRightLong=faArrowRightLong;
  faFa=faF;
  faPlay=faPlay;
  faHeart=faHeart;
  faCompress=faCompress;
  faApple=faApple;
  faGooglePlay=faGooglePlay;
  faArrowRight=faArrowRight;
  faArrowLeft=faArrowLeft;
  faUser=faUser;
  faHandPointer=faHandPointer;
  faCartPlus=faCartPlus;
  faStar=faStar;
  faPhone=faPhone;
  faLocation=faLocation; 
  faMailBulk=faMailBulk;
  faPlus=faPlus;
  faXmark=faXmark;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
  faGoogle=faGoogle;
  faCaretRight=faCaretRight;
  faWhatsapp=faWhatsapp;
  faEnvelope=faEnvelope;
  faLocationDot=faLocationDot;
  faCarSide=faCarSide;
  faCircleCheck=faCircleCheck;
  // flaticonspeedometer=flaticonspeedometer;

  constructor (private router: Router ){}

  ngOnInit(): void {
  }

//   goHome(){
//     this.router.navigate(['home']);
//   }

//   goAbout(){
//     this.router.navigate(['about']);
//   }
}
