import { Component, OnInit } from '@angular/core';
import { DataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  articles;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['data'];
    });
  }

}
