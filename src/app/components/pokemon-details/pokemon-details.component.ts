import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from '../../models';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsComponent {
  @Input() card: Card;
  @Input() cardId: string;
  @Output() edit = new EventEmitter<boolean>();

  editMode(isEditMode): void {
    this.edit.emit(isEditMode);
  }
}
