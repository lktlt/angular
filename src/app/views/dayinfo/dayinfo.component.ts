import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-dayinfo',
  templateUrl: './dayinfo.component.html',
  styleUrls: ['./dayinfo.component.less']
})
export class DayinfoComponent implements OnInit {
  newslist: any[] = [];
  currentTime = new Date();
  constructor(private activatedRoute:ActivatedRoute,private newsService:NewsService) { }

  ngOnInit(): void {
    let key = this.activatedRoute.queryParams.subscribe((params) => {
      this.newsService.getRecommendData('count=15').then((res) => {
        console.log(res.items);
        this.newslist = res.items;
      });
    });
  }

}
