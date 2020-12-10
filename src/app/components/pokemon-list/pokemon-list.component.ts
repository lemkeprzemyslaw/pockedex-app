import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService, CardsDataService} from '../../services';
import {Subscription} from 'rxjs';
import {Card} from '../../models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  cardId: string = null;
  cards: Card[];
  subscription: Subscription;
  card: Card;
  editMode = false;

  constructor(private route: ActivatedRoute, private cardsService: ApiService, private dataService: CardsDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.cardsService.getAllCards().subscribe((response: Card[]) => {
      this.cards = response
        .sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber);
      this.dataService.saveData(this.cards);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateChoosenCard(cardId: string): void {
    this.cardId = cardId;
    this.card = this.dataService.findCard(cardId);
  }

  showEditForm(editMode): void {
    this.editMode = editMode;
  }

  updateCard(updatedData: object): void {
    this.card = {...this.card, ...updatedData};
    this.dataService.updateCard(updatedData, this.card.id);
    this.cards = this.dataService.cardsData;
  }
}
