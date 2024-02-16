import { TestBed } from '@angular/core/testing';

import { JokesStateService } from './jokes-state.service';

describe('JokesStateService', () => {
  let service: JokesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
