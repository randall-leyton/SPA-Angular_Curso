

 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroresComponent } from './components/herores/herores.component';
import { HeroreComponent } from './components/herore/herore.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  {path: 'heroe/:id' , component:HeroreComponent},
  {path: 'buscar/:termino' , component: BuscadorComponent},
  { path: 'heroes', component: HeroresComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch:'full' , redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


