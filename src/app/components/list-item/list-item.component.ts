import {ChangeDetectionStrategy, Component, Input, Output} from '@angular/core';
import {Card} from '../../models';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() card: Card;
  @Output() cardChooseEvent = new EventEmitter<string>();

  chooseCard(cardId: string): void {
    this.cardChooseEvent.emit(cardId);
  }
}
