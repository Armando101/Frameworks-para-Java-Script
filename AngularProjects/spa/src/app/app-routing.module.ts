import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'heroes', component: HeroesComponent},
	{ path: 'hero/:id', component: HeroeComponent},
	{ path: 'hero-search/:termino', component: SearchHeroComponent},
	{ path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
