import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/Country.service';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html'
})
export class ByCountryPagesComponent {

  public countries: Country[] =[]
  constructor( private service: CountryService ) {   
    
  }

 public searchByContry(value:string){
  this.service.searchCountry(value).subscribe(result =>{
    this.countries = result
  });
 }


}
