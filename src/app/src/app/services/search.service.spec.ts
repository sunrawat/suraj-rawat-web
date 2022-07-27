import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let httpController: HttpTestingController;

	let url = 'https://api.github.com/search/users?q=foo in:login';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(SearchService);
    httpController = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getAllBooks and return an array of Books', () => {
    const data =  {
      total_count: 1,
      incomplete_results: false,
      items: []
    }
    service.getUser('foo').subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpController.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(data);
  })
});
