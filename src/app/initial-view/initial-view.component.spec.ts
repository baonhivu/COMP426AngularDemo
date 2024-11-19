import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialViewComponent } from './initial-view.component';

describe('InitialViewComponent', () => {
  let component: InitialViewComponent;
  let fixture: ComponentFixture<InitialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
