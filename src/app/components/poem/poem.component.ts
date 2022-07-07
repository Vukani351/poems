import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css'],
})
export class PoemComponent implements OnInit {
  faves = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getFaves() {
    this.http.get('https://poetrydb.org/title/Ballad').subscribe((data) => {
      var count = 5;
      this.faves = [];
      for (let index = 0; index < count; index++) {
        this.faves.push(data[index]);
      }
    });
  }
}
