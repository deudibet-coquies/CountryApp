import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/Country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html'
})
export class ByCapitalPagesComponent implements OnInit {

public isLoading: boolean = false;

  public countries: Country[] = []
  public initialValue: string = "";
  constructor( private service: CountryService ) {   
    
  }


  ngOnInit(): void {
    this.countries =  this.service.cacheStore.byCapital.countries;
    this.initialValue =  this.service.cacheStore.byCapital.term;
  }

 public searchByCapital(value:string){
  this.isLoading = true;
  this.service.searchCapital(value).subscribe(result =>{
    this.countries = result
    this.isLoading = false;
  });
 }

}
