import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../../services/search.service';

import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultComponent ],
      providers: [SearchService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should search event called', () => {
    spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  });
  it('should paginate event called', () => {
    spyOn(component, 'paginate').and.callThrough();
    component.paginate();
    expect(component.paginate).toHaveBeenCalled();
  });
  it('should search event called', () => {
    spyOn(component, 'sortTable').and.callThrough();
    component.sortTable();
    expect(component.sortTable).toHaveBeenCalled();
  });
});
