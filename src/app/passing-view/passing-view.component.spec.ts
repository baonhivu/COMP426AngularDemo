import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassingViewComponent } from './passing-view.component';

describe('PassingViewComponent', () => {
  let component: PassingViewComponent;
  let fixture: ComponentFixture<PassingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassingViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
