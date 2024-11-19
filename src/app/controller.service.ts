import { Injectable } from '@angular/core';
import { Card } from './card/card.component';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private state: string = "initial";
  private name: string = "";
  private cards : Card[] = [];
  private cardsToPass : Card[] = [];

  constructor() {
    let suits = ["H", "S", "D", "C"]
    let ranks = [2, 3 ,4]
    this.cards = suits.flatMap(s => {
      return ranks.map(r => new Card(s, r))
    });
   }


  public getName() : string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setState(state: string) {
    this.state = state;
  }

  public getState(state : string) {
    return state;
  }

  public getCards() : Card[] {
    return this.cards;
  }

  public isInitial() : boolean {
    return this.state === "initial";
  }

  public isPassing() : boolean {
    return this.state === "passing";
  }

  public isPlaying() : boolean {
    return this.state === "playing";
  }

  public selectCardToPass(card: Card) : void {
    this.cardsToPass.push(card);
    this.cards = this.cards.map(c => {
      if ((c.suit === card.suit) && (c.rank === card.rank))
        c.isSelected = true;
      return c;
    })
    if (this.cardsToPass.length === 3) {
      this.state = "playing";
      this.cards = this.cards.map(c => { c.isSelected = false; return c});
      this.cardsToPass = [];
    }
  }

  public selectCardToPlay(card: Card) : void {
    this.cards = this.cards.filter(c => (c.rank !== card.rank) || (c.suit !== card.suit));
  }

}
