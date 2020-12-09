import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../../models';
import {CardsDataService, ApiService} from '../../services';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsComponent implements OnInit {
  cards: Card[];
  id: any;
  card: Card;

  constructor(private route: ActivatedRoute, private cardsService: ApiService, private cardsData: CardsDataService) {
    route.params.subscribe(({ id }) => {
      this.card = cardsData.findCard(id);
      console.log(this.card);
    });
  }

  ngOnInit(): void {

  }

}
