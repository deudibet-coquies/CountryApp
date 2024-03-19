import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/Country.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html'
})
export class ByRegionPagesComponent implements OnInit {

  public isLoading: boolean = false;
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private service: CountryService ) {   
    
  }

  ngOnInit(): void {
    this.countries =  this.service.cacheStore.byRegion.countries;
    this.selectedRegion =  this.service.cacheStore.byRegion.region;
  }

 public searchByRegion(value:Region):void{
  this.isLoading = true;
  this.selectedRegion = value;
  this.service.searchRegion(value).subscribe(result =>{
    this.countries = result;
    this.isLoading = false;
  });
 }

}
