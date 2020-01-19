import { TestBed } from '@angular/core/testing';

import { MembersAreaService } from './members-area.service';

describe('MembersAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembersAreaService = TestBed.get(MembersAreaService);
    expect(service).toBeTruthy();
  });
});
