import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControllerService } from '../controller.service';
import { NgIf } from '@angular/common';

export class Card {
  suit: string;
  rank: number;
  isSelected : boolean;

  constructor(suit: string, rank: number) {
    this.suit= suit;
    this.rank = rank;
    this.isSelected = false;
  }
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input('card') card: Card = new Card("", 1);
  @Output('selectCard') selectCard = new EventEmitter<Card>;

  constructor(private controllerService: ControllerService) {}

  public getSuit() : string {
    return this.card.suit;
  }
  
  public getRank() : number {
    return this.card.rank;
  }

  public getImageUrl() : string {
    return "https://deckofcardsapi.com/static/img/" + this.getRank() + this.getSuit() + ".png";
  }

  public handleSelection() : void {
    this.selectCard.emit(this.card);
  }
}
