import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AbautPageComponent } from './pages/abaut-page/abaut-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './pages/contactPage/contact.component';
import { ShearchBoxComponent } from './components/search-box/shearch-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AbautPageComponent,
    SidebarComponent,
    ContactComponent,
    ShearchBoxComponent,
  ],
  imports: [
    CommonModule,    
    RouterModule,
    
  ],
  exports:[
    HomePageComponent,
    AbautPageComponent,
    SidebarComponent,    
    ContactComponent,     
    ShearchBoxComponent,
  ]
})
export class SharedModule { }
