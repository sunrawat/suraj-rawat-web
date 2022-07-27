import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../../models/search';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnChanges {
  @Input() loading = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: any|Item = [];
  dataSource: MatTableDataSource<Item>;
  displayedColumns: string[] = ['avatar_url', 'login', 'type'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }
  ngOnChanges(){ 
    this.dataSource = new MatTableDataSource( this.data);
    this.sortTable();
    this.paginate();
  }
  paginate() {
    this.dataSource.paginator = this.paginator;
  }
  sortTable() {
    if(this.sort) {
      this.sort.sort(({ id: 'login', start: 'asc'}) as MatSortable); 
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    };
    }
  }
}
