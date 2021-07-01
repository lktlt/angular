import { Component, OnInit } from '@angular/core';
import axios from '_axios@0.21.1@axios';
import { Router, ActivatedRoute } from "@angular/router";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  quoteList: any[] = [];
  zhishulistPosition = '';
  circleclass = '';
  currentIndex = 0;
  activeIndex = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.getData();
  }

  ngOnInit(): void {
  }
  async getData() {
    let result = await axios.get('http://localhost:8080/api/index/quote');
    this.quoteList = result.data.data.items;
  }

  toggleZhishu(index: number) {
    this.currentIndex = index;
    this.zhishulistPosition = `translate(${-index * 620}px)`;
  }

  tabEvent(index: number) {
    this.activeIndex = index;
    let paths = ['index/recommend', 'index/dayinfo'];
    if (index === 0) {
      this.router.navigate([paths[index]]);
    } else {
      this.router.navigate([paths[index], '7*24']);
    }
  }
}
