import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CardsDataService, ApiService} from '../../services';
import {Subscription} from 'rxjs';
import {Card} from '../../models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private cardsService: ApiService, private cardsData: CardsDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.cardsService.getAllCards().subscribe((response: Card[]) => {
      this.cards = response
        .sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber);
      this.cardsData.saveData(this.cards);
      console.log(this.cardsData.cardsData);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
