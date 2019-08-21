import { TestBed } from '@angular/core/testing';

import { MytvshowService } from './mytvshow.service';

describe('MytvshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MytvshowService = TestBed.get(MytvshowService);
    expect(service).toBeTruthy();
  });
});
