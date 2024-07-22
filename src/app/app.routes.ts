import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { StoreComponent } from './store/store.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

export const routes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: 'store', component: StoreComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: MainPageComponent},
    { path: 'how-to-play', component: HowToPlayComponent}

];
