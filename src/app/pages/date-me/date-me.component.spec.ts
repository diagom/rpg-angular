import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMeComponent } from './date-me.component';

describe('DateMeComponent', () => {
  let component: DateMeComponent;
  let fixture: ComponentFixture<DateMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
