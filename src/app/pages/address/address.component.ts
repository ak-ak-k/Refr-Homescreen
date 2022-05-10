import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  links = ['Store type', 'Category', 'Cashback'];
  dasktopLinks = ['Store type', 'Category', 'Cashback tier']
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
