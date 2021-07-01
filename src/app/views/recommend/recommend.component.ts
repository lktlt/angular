import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  newslist: any[] = [];
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let key = this.route.snapshot.paramMap.get('key');
    console.log('key', key);
    
    this.route.queryParams.subscribe((params) => {
        this.newsService.getRecommendData('size=15').then((res) => {
          console.log(res.items);
          this.newslist = res.items;
      });
      // switch (key) {
      //   case '7*24':
      //     this.newsService.getRecommendData('count=15').then((res) => {
      //       console.log(res.items);
      //       this.newslist = res.items;
      //     });
      //     break;
      //   default:
      //     this.newsService.getRecommendData('size=15').then((res) => {
      //       console.log(res.items);
      //       this.newslist = res.items;
      //     });
      //     break;
      // }
    });
  }

}
