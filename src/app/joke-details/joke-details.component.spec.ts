import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDetailsComponent } from './joke-details.component';

describe('JokeDetailsComponent', () => {
  let component: JokeDetailsComponent;
  let fixture: ComponentFixture<JokeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
