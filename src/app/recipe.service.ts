import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiKey: string = 'dLFWxCKsC4x0A1g051j8LAlyognhereB';

  private recipeSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  recipes$: Observable<any[]> = this.recipeSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    const url = `https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`;
    const headers = new HttpHeaders().set('apiKey', this.apiKey);

    this.http.get(url, { headers }).subscribe((data: any) => {
      this.recipeSubject.next(data.results);
    });
  }
}
