import { AfterViewInit, Component, OnChanges, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, switchMap, tap } from 'rxjs';
import { App, Item } from '../../models/search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  @Output() searchItemEvent = new EventEmitter<string>();
  searchInput = '';
  constructor() {}
  search(){
    this.searchItemEvent.emit(this.searchInput)
  }
}
