import { TestBed } from '@angular/core/testing';

import { MyDreamsService } from './my-dreams.service';

describe('MyDreamsService', () => {
  let service: MyDreamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDreamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
