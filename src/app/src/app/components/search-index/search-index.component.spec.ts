import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../../services/search.service';

import { SearchIndexComponent } from './search-index.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
describe('SearchIndexComponent', () => {
  let component: SearchIndexComponent;
  let fixture: ComponentFixture<SearchIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIndexComponent ],
      providers: [SearchService],
      imports:[ HttpClientModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search function gets called', () => {
    spyOn(component.searchService, 'getUser').and.callThrough();
    component.searchItemEvent('foo');
    expect(component.searchService.getUser).toHaveBeenCalled();
  });
});
