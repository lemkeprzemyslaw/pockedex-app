import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() card: Card;
}
