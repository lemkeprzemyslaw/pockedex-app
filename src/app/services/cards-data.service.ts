import { Injectable } from '@angular/core';
import {Card} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {
  cardsData: Card[] = [];

  constructor() { }
  saveData(data: Card[]): void {
    this.cardsData.push(...data);
  }

  findCard(cardId: string): Card {
    if (!this.cardsData) {
      return;
    }

    return this.cardsData.find(({ id }) => cardId === id);
  }
}
