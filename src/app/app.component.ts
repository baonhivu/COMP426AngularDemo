import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControllerService } from './controller.service';
import { InitialViewComponent } from './initial-view/initial-view.component'
import { PassingViewComponent } from './passing-view/passing-view.component';
import { PlayingViewComponent } from './playing-view/playing-view.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InitialViewComponent, PassingViewComponent, PlayingViewComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comp426-demo';

  constructor(private controller: ControllerService) {}

  public isInitial() : boolean {
    return this.controller.isInitial();
  }

  public isPassing() : boolean {
    return this.controller.isPassing();
  }

  public isPlaying() : boolean {
    return this.controller.isPlaying();
  }
}
