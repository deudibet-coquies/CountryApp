import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/CacheStore';
import { Region } from '../interfaces/region.type';



const API_COUNTRY:string = 'https://restcountries.com/v3.1'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public cacheStore: CacheStore = {
    byCapital:   { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion:    { region: '', countries: [] },
  }

  constructor(private http: HttpClient) { 
    console.log('cacheStore',this.cacheStore);
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
  }

  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }


  searchContryByAlfaCode(code: string): Observable<Country | null> {
    let url = `${API_COUNTRY}/alpha/${code}`;    
    return this.http.get<Country[]>( url).pipe(
      map(c => c.length > 0 ? c[0] : null ),
      catchError(error => of(null))
    );
    
  }

  searchCapital(term: string): Observable<Country[]> {
    let url = `${API_COUNTRY}/capital/${term}`;
    return this.getHttpContries(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries }),
      tap( () => this.saveToLocalStorage() ),
    );    
  }

  searchCountry(term: string): Observable<Country[]> {
    let url = `${API_COUNTRY}/name/${term}`;
    return this.getHttpContries(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term, countries }),
      tap( () => this.saveToLocalStorage() ),
    ); 
  }

  searchRegion(region: Region): Observable<Country[]> {
    let url = `${API_COUNTRY}/region/${region}`;
    return  this.getHttpContries(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries }),
      tap( () => this.saveToLocalStorage() ),
    );
  }

  private getHttpContries(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(error => of([])),
    );
  }

}
