import { Component } from '@angular/core';
import { ControllerService } from '../controller.service'

@Component({
  selector: 'app-initial-view',
  standalone: true,
  imports: [],
  templateUrl: './initial-view.component.html',
  styleUrl: './initial-view.component.css'
})
export class InitialViewComponent {
  constructor(private controller: ControllerService) {}

  handleSubmit(s: string) {
    this.controller.setName(s);
    this.controller.setState("passing");
  }
}
