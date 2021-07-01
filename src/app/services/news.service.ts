import { Injectable } from '@angular/core';
import axios from '_axios@0.21.1@axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  host = 'http://localhost:8080';
  constructor() { }
  async getRecommendData(par: string) {
    //   热帖size: 15，7*24-count: 15
    let httpUrl = this.host + `/api/index/news?${par}`;
    let result = await axios.get(httpUrl);
    return result.data;
  }
  async getCStocksData(par: string) {
    let httpUrl = this.host + `/api/choose/${par}`;
    let result: any = await axios.get(httpUrl);
    return result.data;
  }
  // 获取条件股票
  async getChoosetoolsData(): Promise<string> {
    let httpUrl = this.host + `/api/choose/choosetools`;
    let result: any = await axios.get(httpUrl);
    return result.data;
  }

  async getStocksData() {
    let httpUrl = this.host + `/api/choose/stocks`;
    let result: any = await axios.get(httpUrl);
    return result.data;
  }
  async getRangeData(field: string) {
    let httpUrl = this.host + `/api/choose/range?field=${field}`;
    let result: any = await axios.get(httpUrl);
    return result.data;
  }
  async getstockListData(options: any) {
    let httpUrl = this.host + `/api/choose/stockList`;
    let result: any = await axios.get(httpUrl, { params: options });
    return result.data;
  }
}
