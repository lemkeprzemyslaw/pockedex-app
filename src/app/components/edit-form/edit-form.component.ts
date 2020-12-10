import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../models';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormComponent implements OnInit {
  @Input() card: Card;
  @Output() edit = new EventEmitter<boolean>();
  @Output() sendData = new EventEmitter<object>();
  cardForm: FormGroup;

  onSubmit(): void {
    this.editMode(false);
    this.sendData.emit(this.cardForm.value);
  }

  editMode(isEditMode): void {
    this.edit.emit(isEditMode);
  }

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      name: new FormControl(this.card.name),
      hp: new FormControl(this.card.hp),
      rarity: new FormControl(this.card.rarity),
    });
  }
}
