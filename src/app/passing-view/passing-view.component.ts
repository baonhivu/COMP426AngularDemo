import { Component } from '@angular/core';
import { ControllerService } from '../controller.service';
import { Card, CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-passing-view',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './passing-view.component.html',
  styleUrl: './passing-view.component.css'
})
export class PassingViewComponent {
  constructor(private controller: ControllerService) {
  }

  public getCards() : Card[] {
    return this.controller.getCards();
  }

  public handleSelectionForPass(card: Card) {
    this.controller.selectCardToPass(card);
  } 
}
