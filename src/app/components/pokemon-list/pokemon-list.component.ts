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
  editMode: boolean;

  constructor(private route: ActivatedRoute, private cardsService: ApiService, private cardsData: CardsDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.cardsService.getAllCards().subscribe((response: Card[]) => {
      this.cards = response
        .sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber);
      this.cardsData.saveData(this.cards);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateChoosenCard(cardId: string): void {
    this.cardId = cardId;
    this.card = this.cardsData.findCard(cardId);
  }

  showEditForm(): void {
    this.editMode = true;
  }
}
