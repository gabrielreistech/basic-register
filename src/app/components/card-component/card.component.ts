import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user-interface/user-interface.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input() cardData?: User;
}
