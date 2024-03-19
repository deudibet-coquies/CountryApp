import { AbautPageComponent } from './pages/abaut-page/abaut-page.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contactPage/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShearchBoxComponent } from './components/search-box/shearch-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AbautPageComponent,
    ContactComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    ShearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,    
    RouterModule,
    
  ],
  exports:[
    AbautPageComponent,
    ContactComponent,     
    HomePageComponent,
    LoadingSpinnerComponent,
    ShearchBoxComponent,
    SidebarComponent,    
  ]
})
export class SharedModule { }
