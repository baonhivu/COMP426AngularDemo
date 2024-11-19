import { Component } from '@angular/core';
import { ControllerService } from '../controller.service';
import { Card, CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-playing-view',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './playing-view.component.html',
  styleUrl: './playing-view.component.css'
})
export class PlayingViewComponent {
  constructor(private controller: ControllerService) {
  }

  public getCards() : Card[] {
    return this.controller.getCards();
  }

  public handleCardSelectionForPlaying(card: Card) {
    this.controller.selectCardToPlay(card);

  }
}
