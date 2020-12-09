import {Component, OnInit} from '@angular/core';
import {Card} from './models';
import {ActivatedRoute} from '@angular/router';
import {CardsDataService, ApiService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pockedex-app';

  constructor(private route: ActivatedRoute, private cardsService: ApiService, private cardsData: CardsDataService) {
  }

  ngOnInit(): void {
    this.cardsService.getAllCards().subscribe((response: Card[]) => {
      this.cardsData.saveData(response);
      console.log(this.cardsData.cardsData);
    });
  }
}
