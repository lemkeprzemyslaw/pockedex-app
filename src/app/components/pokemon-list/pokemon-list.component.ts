import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardsService} from '../../services';
import {pluck, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

interface Card {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  retreatCost: string[];
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: {
    cost: string[],
    name: string,
    text: string,
    damage: string,
    convertedEnergyCost: number
  }[];
}

interface Cards {
  cards: Card[];
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.subscription = this.cardsService.getAllCards().subscribe((response: Cards) => {
      this.cards = response.cards
        .sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber);
      console.log(this.cards);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
