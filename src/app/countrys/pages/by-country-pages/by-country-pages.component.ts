import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/Country.service';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html'
})
export class ByCountryPagesComponent implements OnInit {
  public isLoading: boolean = false;
  public countries: Country[] = [];
  public initialValue: string = "";
  constructor( private service: CountryService ) {   
    
  }
  ngOnInit(): void {
    this.countries =  this.service.cacheStore.byCountries.countries;
    this.initialValue =  this.service.cacheStore.byCountries.term;
  }

 public searchByContry(value:string){
  this.isLoading = true;
  this.service.searchCountry(value).subscribe(result =>{
    this.countries = result
    this.isLoading = false;
  });
 }


}
