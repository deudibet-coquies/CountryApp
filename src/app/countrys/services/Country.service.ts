import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of } from 'rxjs';



const API_COUNTRY:string = 'https://restcountries.com/v3.1'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  searchContryByAlfaCode(code: string): Observable<Country | null> {
    let url = `${API_COUNTRY}/alpha/${code}`;    
    return this.http.get<Country[]>( url).pipe(
      map(c => c.length > 0 ? c[0] : null ),
      catchError(error => of(null))
    );
    
  }

  searchCapital(capital: string): Observable<Country[]> {
    let url = `${API_COUNTRY}/capital/${capital}`;
    return this.http.get<Country[]>( url).pipe(
      catchError(error => of([]))
    );
    
  }

  searchCountry(name: string): Observable<Country[]> {
    let url = `${API_COUNTRY}/name/${name}`;
    return this.http.get<Country[]>( url).pipe(
      catchError(error => of([]))
    );
  }

  searchRegion(region: string): Observable<Country[]> {
    let url = `${API_COUNTRY}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => of([]))
    );
  }

  onRenderUrl(url:string):void{

  }

}
