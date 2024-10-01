import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllCardsComponent } from './see-all-cards.component';

describe('SeeAllCardsComponent', () => {
  let component: SeeAllCardsComponent;
  let fixture: ComponentFixture<SeeAllCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeAllCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAllCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
