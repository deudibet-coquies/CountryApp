import { Component } from '@angular/core';
import { CountryService } from '../../services/Country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html'
})
export class ByCapitalPagesComponent {

  public countries: Country[] =[]
  constructor( private service: CountryService ) {   
    
  }

 public searchByCapital(value:string){
  this.service.searchCapital(value).subscribe(result =>{
    this.countries = result
  });
 }

}
