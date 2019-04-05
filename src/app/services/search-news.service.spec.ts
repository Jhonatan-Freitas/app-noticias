import { TestBed } from '@angular/core/testing';

import { SearchNewsService } from './search-news.service';

describe('SearchNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchNewsService = TestBed.get(SearchNewsService);
    expect(service).toBeTruthy();
  });
});
