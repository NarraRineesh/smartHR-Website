import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { NavbarTwoComponent } from './components/layouts/navbar-two/navbar-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsTwoComponent } from './components/pages/projects-two/projects-two.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { careerComponent } from './components/pages/career/career.component';
import { CareerDetailsComponent } from './components/pages/career-details/career-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeThreeComponent,
    NavbarTwoComponent,
    AboutComponent,
    ServicesOneComponent,
    ServicesDetailsComponent,
    ProjectsTwoComponent,
    ProjectsDetailsComponent,
    ContactComponent,
    PricingComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    careerComponent,
    ErrorComponent,
    CareerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
