import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.scss']
})
export class SearchIndexComponent {
  data:any  = [];
  loading:boolean = false;
  constructor(public searchService: SearchService) {}

  searchItemEvent(searchInput: any) {
    this.loading = true;
    this.searchService.getUser(searchInput).subscribe((r)=>{
      this.data = r.items.map((result) => {
        result.login = result.login.toUpperCase();
        return result;
      })
      this.loading = false;
    });
  }
}
