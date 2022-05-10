import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links = ['Store type', 'Category', 'Cashback'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
