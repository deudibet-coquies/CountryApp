import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/Country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-pages',
  templateUrl: './country-pages.component.html',
  styleUrl: './country-pages.component.css'
})
export class CountryPagesComponent  implements OnInit {

  public isLoading: boolean = false;
  public country?: Country | null;

  constructor( 
    private activatedRouter: ActivatedRoute,
    private service: CountryService,
    private router: Router) {
  }
  
  
  ngOnInit(): void {    
    this.isLoading = true;
    this.activatedRouter.params
    .pipe( 
      switchMap( ({ id })  => this.service.searchContryByAlfaCode(id) )
    )
    .subscribe( resp => {
        if (!resp) {
          this.router.navigateByUrl('')
        }
        this.country = resp;
        this.isLoading = false;
        console.log('tenemos un pais');
    });
    
  }


  searchContryByCode(id:string){
   
  }


}
