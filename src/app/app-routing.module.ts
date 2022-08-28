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

const routes: Routes = [
    {path: '', component: HomeThreeComponent},
    
    {path: 'home', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesOneComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects', component: ProjectsTwoComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component
    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}