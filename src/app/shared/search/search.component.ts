import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search:string = '';
  @Input() type = 1;
  @Input() placeholder:string = 'Search'
  
  constructor() { }

  ngOnInit(): void {
  }

}
