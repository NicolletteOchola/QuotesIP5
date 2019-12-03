import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete) {
      this.quotes.splice(index,1);
    }
  }
  }

  constructor() {
    this.quotes=[
     new Quotes (1,'Ellen White','The Gospel is a simplifier of life.', new Date(1997,6)),
     new Quotes (2,'Winston Churchill','Continuous effort - not strength - is the key to unlocking our potential.',new Date (2000,2)),
     new Quotes (3,'Abraham Lincoln','Always bear in mind that your own resolution to succeed is more important than any one thing.',new Date (2010,10)),
     new Quotes (4,'Albert Einstein','A happy man is too satisfied with the present to dwell too much on the future.', new Date (1995,2)),
    ];
   }

  ngOnInit() {
  }

}
