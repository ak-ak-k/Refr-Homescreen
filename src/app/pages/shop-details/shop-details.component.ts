import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  accordion:any = 'card1';
  segment:string = 'visit-store';
  showAddToCard:boolean = false;
  openedAccordianLists:any = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  // showAccordion (value:string) {
  //   if(this.accordion === value) {
  //     this.accordion = null
  //     return
  //   }
  //   this.accordion = value
  // }
  
  showAccordion (value:string) {
    let index = this.openedAccordianLists.indexOf(value)
    if(index === -1) {
      this.openedAccordianLists.push(value)
    } else
    {
      this.openedAccordianLists.splice(index,1)
    }
  }

  isAccordianOpen(value:string) {
    let index = this.openedAccordianLists.indexOf(value)
    if(index === -1) {
      return false
    }
    else
    {
       return true
    }
  }

  changeSegment(segmentValue:string) {
    this.segment = segmentValue
  }

  showAndHideAddToCard() {
    this.showAddToCard = true
  }

  
}
