import { Injectable } from '@angular/core';
import {Card} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {
  cardsData: Card[] = [];

  saveData(data: Card[]): void {
    this.cardsData.push(...data);
  }

  findCard(cardId: string): Card {
    if (!this.cardsData) {
      return;
    }

    return this.cardsData.find(({ id }) => cardId === id);
  }

  updateCard(updatedData: object, cardId: string): void {
    const cardIndex = this.cardsData.findIndex(({ id }) => cardId === id);
    this.cardsData[cardIndex] = {...this.cardsData[cardIndex], ...updatedData};
  }
}
