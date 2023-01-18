import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SalestermComponent } from './salesterm/salesterm.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { FaqComponent } from './faq/faq.component';
import { HowtobuyComponent } from './howtobuy/howtobuy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InventoryComponent,
    TestimonialComponent,
    SalestermComponent,
    PrivacypolicyComponent,
    FaqComponent,
    HowtobuyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  fatStar: any;
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
   
  }
}
