import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayingViewComponent } from './playing-view.component';

describe('PlayingViewComponent', () => {
  let component: PlayingViewComponent;
  let fixture: ComponentFixture<PlayingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
