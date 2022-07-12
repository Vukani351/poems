import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly url = 'https://poetrydb.org/author/';
  readonly poemsUrl = 'https://poetrydb.org/title/john';
  faves = [];
  poems: any;
  poemName: string;
  results: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.results = ['1', '2', '3'];
    throw new Error('Method not implemented.');
  }

  showAuth() {
    setInterval(() => {
      while (!this.poems) {
        console.log('checking \n');
        console.log(this.poemName + '\n is it');
      }
    }, 1000);
    // console.log(this.poemName + '\n is it');
  }

  searchByAuthor(author: string) {
    if (author == '') {
      this.results = undefined;
    } else {
      this.http.get(this.url + author).subscribe((data: any[]) => {
        this.results = data.map((d) => {
          return d.title;
        });
      });
    }
  }

  getPoems() {
    this.poems = this.http.get(this.poemsUrl).subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
