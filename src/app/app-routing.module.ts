import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ProjectsTwoComponent } from './components/pages/projects-two/projects-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { careerComponent } from './components/pages/career/career.component';
import { CareerDetailsComponent } from './components/pages/career-details/career-details.component';

const routes: Routes = [
    {path: '', component: HomeThreeComponent},
    {path: 'home', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesOneComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'career', component: careerComponent},
    {path: 'career-details/:id', component: CareerDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}