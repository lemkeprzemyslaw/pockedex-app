import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {}

  getAllCards(): Observable<object> {
    return this.http.get('https://api.pokemontcg.io/v1/cards', {params: {pageSize: '1000', setCode: 'base1|base2', supertype: 'Pokémon'}});
  }

  getSpecificCard(id): Observable<object> {
    return this.http.get(`https://api.pokemontcg.io/v1/cards/${id}`);
  }
}
