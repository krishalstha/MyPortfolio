import { Routes } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'topbar', component: TopbarComponent},
    { path: 'sidebar', component: SidebarComponent},
    { path: 'about', component: AboutComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'contact', component: ContactComponent},
];
