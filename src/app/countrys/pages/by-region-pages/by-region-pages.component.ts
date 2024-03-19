import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/Country.service';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html'
})
export class ByRegionPagesComponent {


  public countries: Country[] =[]
  constructor( private service: CountryService ) {   
    
  }

 public searchByRegion(value:string){
  this.service.searchRegion(value).subscribe(result =>{
    this.countries = result
  });
 }

}
