import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AbautPageComponent } from './shared/pages/abaut-page/abaut-page.component';
import { ContactComponent } from './shared/pages/contactPage/contact.component';

const routes: Routes = [
 // {path:'', component:HomePageComponent},
  {path:'abaut', component:AbautPageComponent},
  {path:'contact', component:ContactComponent},
  {path:'countries', 
  loadChildren: () => import('./countrys/countries.module').then(m => m.CountriesModule)},
  {path:'**',redirectTo:'countries'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
