import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly url = 'https://poetrydb.org/title/';
  readonly poemsUrl = 'https://poetrydb.org/title/john';
  faves = [];
  poems: any;
  poemName: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showAuth() {
    setInterval(() => {
      while (!this.poems) {
        console.log('checking \n');
        console.log(this.poemName + '\n is it');
      }
    }, 500);
    console.log(this.poemName + '\n is it');
  }

  searchByAuthor(author: string) {
    this.http.get(this.poemsUrl + author).subscribe((data) => {
      this.poems = data;
    });
  }

  getPoems() {
    this.poems = this.http.get(this.poemsUrl).subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
