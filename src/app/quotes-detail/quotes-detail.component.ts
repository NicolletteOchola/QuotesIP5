import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  numberoflikes : number=0
  numberofdislikes : number=0
  likebuttonclick(){
    this.numberoflikes++;
  }
  dislikebuttonclick(){
    this.numberofdislikes++;
  }
  @Input () quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
