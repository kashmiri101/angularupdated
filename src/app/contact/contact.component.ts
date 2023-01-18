import { Component, OnInit } from '@angular/core';
import { faLocationDot, faEnvelope, faCaretRight, faXmark, faPlus, faHandPointer, faCartPlus, faStar, faPhone, faLocation, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faInstagram,  faTwitter, faFacebook, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goHome(){
    this.router.navigate(['home']);
  }
}
