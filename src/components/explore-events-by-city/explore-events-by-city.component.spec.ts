import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEventsByCityComponent } from './explore-events-by-city.component';

describe('ExploreEventsByCityComponent', () => {
  let component: ExploreEventsByCityComponent;
  let fixture: ComponentFixture<ExploreEventsByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreEventsByCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreEventsByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
