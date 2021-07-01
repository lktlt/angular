import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-choose-stock',
  templateUrl: './choose-stock.component.html',
  styleUrls: ['./choose-stock.component.less']
})
export class ChooseStockComponent implements OnInit {
  industryList: any[] = [];
  areasList: any = {};
  areaskeys: any[] = [];
  stocks: any[] = [];
  baseIndexlist: any[] = [];
  industryInfolist: any[] = [];
  xqIndexlist: any[] = [];
  financialIndexlist: any[] = [];
  toolList: any[] = [];
  finacialKeys: any[] = [];
  selectedList: any[] = [];
  currenttabIndex = 0;
  stockList: any = [];
  checks: any[] = [];
  exchange = "sh_sz";
  areacode = "";
  indcode = "";
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getindustry();
    this.getareas();
    this.getStocks();
    // let kstr = '{"基本指标":[{"name":"市盈率TTM","field":"pettm","adj":0},{"name":"净资产收益率","field":"roediluted","adj":1},{"name":"每股净资产","field":"bps","adj":1},{"name":"市盈率LYR","field":"pelyr","adj":0},{"name":"净利润同比增长","field":"npay","adj":1},{"name":"每股收益","field":"eps","adj":1},{"name":"净利润","field":"netprofit","adj":1},{"name":"股息收益率","field":"dy_l","adj":0},{"name":"市销率(倍)","field":"psr","adj":0},{"name":"市净率MRQ","field":"pb","adj":0},{"name":"营业收入","field":"total_revenue","adj":1},{"name":"总市值","field":"mc","adj":0},{"name":"流通市值","field":"fmc","adj":0},{"name":"总资产报酬率","field":"niota","adj":1},{"name":"营业收入同比增长","field":"oiy","adj":1}],"雪球指标":[{"name":"累计交易分享数","field":"deal","adj":0},{"name":"一周新增关注","field":"follow7d","adj":0},{"name":"一周交易分享增长率","field":"deal7dpct","adj":0},{"name":"一周新增交易分享数","field":"deal7d","adj":0},{"name":"一周讨论增长率","field":"tweet7dpct","adj":0},{"name":"累计讨论次数","field":"tweet","adj":0},{"name":"一周关注增长率","field":"follow7dpct","adj":0},{"name":"累计关注人数","field":"follow","adj":0},{"name":"一周新增讨论数","field":"tweet7d","adj":0}],"行情指标":[{"name":"当日涨跌幅","field":"pct","adj":0},{"name":"近5日涨跌幅","field":"pct5","adj":0},{"name":"近60日涨跌幅","field":"pct60","adj":0},{"name":"当日成交额","field":"amount","adj":0},{"name":"当日振幅","field":"chgpct","adj":0},{"name":"近20日涨跌幅","field":"pct20","adj":0},{"name":"近120日涨跌幅","field":"pct120","adj":0},{"name":"近250日涨跌幅","field":"pct250","adj":0},{"name":"本日成交量","field":"volume","adj":0},{"name":"当前价","field":"current","adj":0},{"name":"当日量比","field":"volume_ratio","adj":0},{"name":"年初至今涨跌幅","field":"pct_current_year","adj":0},{"name":"近10日涨跌幅","field":"pct10","adj":0},{"name":"当日换手率","field":"tr","adj":0}],"财务报表":[{"利润表":[{"name":"扣非净利润","field":"npana","adj":1},{"name":"营业成本","field":"bc","adj":1},{"name":"归属于母公司所有者的净利润","field":"np","adj":1},{"name":"净利润","field":"npt","adj":1},{"name":"营业总成本","field":"tbc","adj":1},{"name":"营业收入","field":"bi","adj":1},{"name":"少数股东损益归属于母公司所有者的净利润","field":"mg","adj":1},{"name":"营业总收入","field":"tbi","adj":1},{"name":"利润总额","field":"tp","adj":1},{"name":"营业利润","field":"bp","adj":1}]},{"每股数据":[{"name":"每股净资产","field":"psf","adj":1},{"name":"每股经营现金流","field":"ocps","adj":1},{"name":"每股未分配利润","field":"upps","adj":1},{"name":"扣除非经常性损益后的每股收益","field":"beps","adj":1},{"name":"每股收益","field":"epsdiluted","adj":1},{"name":"稀释每股收益","field":"epsweighted","adj":1},{"name":"每股资本公积金","field":"csps","adj":1}]},{"资产负债表":[{"name":"预收款项","field":"prec","adj":1},{"name":"货币资金","field":"cur","adj":1},{"name":"流动负债","field":"cl","adj":1},{"name":"非流动资产","field":"nca","adj":1},{"name":"资产合计","field":"ta","adj":1},{"name":"应付账款","field":"pay","adj":1},{"name":"资本公积","field":"csps","adj":1},{"name":"存货","field":"inv","adj":1},{"name":"归属于母公司股东权益","field":"eq","adj":1},{"name":"应收账款","field":"rec","adj":1},{"name":"长期投资","field":"li","adj":1},{"name":"非流动负债","field":"ncl","adj":1},{"name":"少数股东权益","field":"me","adj":1},{"name":"负债合计","field":"tl","adj":1},{"name":"无形资产","field":"ia","adj":1},{"name":"股东权益合计","field":"the","adj":1},{"name":"固定资产","field":"fa","adj":1},{"name":"未分配利润","field":"up","adj":1},{"name":"流动资产","field":"ca","adj":1},{"name":"商誉","field":"goodwill","adj":0}]},{"现金流量表":[{"name":"经营活动产生的现金流量净额","field":"bncf","adj":1},{"name":"期末现金及现金等价物余额","field":"fcb","adj":1},{"name":"现金及现金等价物净增加额","field":"cnr","adj":1},{"name":"投资活动产生的现金流量净额","field":"incf","adj":1},{"name":"筹资活动产生的现金流量净额","field":"fncf","adj":1}]}]}'
    // let b = JSON.parse(str);
    // console.log(b);
    // console.log(this.newsService.getChoosetoolsData());
    this.newsService.getChoosetoolsData().then((res) => {
      var str = res.replace('SNB.data.condition = ', '').substr(0, 3424);
      let b = JSON.parse(str);
      // this.toollist=b.
      this.baseIndexlist = b.基本指标;
      this.xqIndexlist = b.雪球指标;
      this.industryInfolist = b.行情指标;
      this.financialIndexlist = b.财务报表;
      this.baseIndexlist.forEach(ele => {
        ele.checked = false;
      });
      this.xqIndexlist.forEach(ele => {
        ele.checked = false;
      });
      this.industryInfolist.forEach(ele => {
        ele.checked = false;
      });
      // this.financialIndexlist.forEach((ele,index) => {
      //   // console.log(ele[this.finacialKeys[index]]);
        
      //   // ele.forEach((element: any) => {
      //   //   element.checked = false;
      //   // });
      // });
      for (let i = 0; i < this.financialIndexlist.length; i++) {
        this.finacialKeys.push(Object.keys(this.financialIndexlist[i]));
      }

      this.toolList.push(this.baseIndexlist);
      this.toolList.push(this.xqIndexlist);
      this.toolList.push(this.industryInfolist);
      this.toolList.push(this.financialIndexlist);
      // console.log(this.baseIndexlist);
      // console.log(this.xqIndexlist);
      // console.log(this.industryInfolist);
      // console.log(this.financialIndexlist);
    });

  }
  async getindustry() {
    this.newsService.getCStocksData('industry').then((res) => {
      this.industryList = res.data.industries;
    });
  }
  async getareas() {
    this.newsService.getCStocksData('areas').then((res) => {
      this.areaskeys = Object.keys(res.data.areas);// ngfor 对象，循环keys
      this.areasList = res.data.areas;
    });
  }
  async getStocks() {
    this.newsService.getStocksData().then((res) => {
      console.log(res.data);
      this.stocks = res.data.list;
    });
  }

  toolTabEvent(indx: number) {
    this.currenttabIndex = indx;
  }

  async checkEvent(item: any, e: any) {
    console.log("--->");
    console.log(item);
    
    let res = await this.newsService.getRangeData(item.field);
    if (!e.target.checked) {
      this.selectedList.forEach((element, index) => {
        if (res.data.field_name == element.field_name) {
          this.selectedList.splice(index, 1);
        }
      });
      return;
    }
    item.checked = true;
    console.log(item);
    res.data.cmax = res.data.max;
    res.data.cmin = res.data.min;
    res.data.field = item.field;
    this.selectedList.push(res.data);
  }
  // {"基本指标":[{"name":"市盈率TTM","field":"pettm","adj":0},{"name":"净资产收益率","field":"roediluted","adj":1},{"name":"每股净资产","field":"bps","adj":1},{"name":"市盈率LYR","field":"pelyr","adj":0},{"name":"净利润同比增长","field":"npay","adj":1},{"name":"每股收益","field":"eps","adj":1},{"name":"净利润","field":"netprofit","adj":1},{"name":"股息收益率","field":"dy_l","adj":0},{"name":"市销率(倍)","field":"psr","adj":0},{"name":"市净率MRQ","field":"pb","adj":0},{"name":"营业收入","field":"total_revenue","adj":1},{"name":"总市值","field":"mc","adj":0},{"name":"流通市值","field":"fmc","adj":0},{"name":"总资产报酬率","field":"niota","adj":1},{"name":"营业收入同比增长","field":"oiy","adj":1}],"雪球指标":[{"name":"累计交易分享数","field":"deal","adj":0},{"name":"一周新增关注","field":"follow7d","adj":0},{"name":"一周交易分享增长率","field":"deal7dpct","adj":0},{"name":"一周新增交易分享数","field":"deal7d","adj":0},{"name":"一周讨论增长率","field":"tweet7dpct","adj":0},{"name":"累计讨论次数","field":"tweet","adj":0},{"name":"一周关注增长率","field":"follow7dpct","adj":0},{"name":"累计关注人数","field":"follow","adj":0},{"name":"一周新增讨论数","field":"tweet7d","adj":0}],"行情指标":[{"name":"当日涨跌幅","field":"pct","adj":0},{"name":"近5日涨跌幅","field":"pct5","adj":0},{"name":"近60日涨跌幅","field":"pct60","adj":0},{"name":"当日成交额","field":"amount","adj":0},{"name":"当日振幅","field":"chgpct","adj":0},{"name":"近20日涨跌幅","field":"pct20","adj":0},{"name":"近120日涨跌幅","field":"pct120","adj":0},{"name":"近250日涨跌幅","field":"pct250","adj":0},{"name":"本日成交量","field":"volume","adj":0},{"name":"当前价","field":"current","adj":0},{"name":"当日量比","field":"volume_ratio","adj":0},{"name":"年初至今涨跌幅","field":"pct_current_year","adj":0},{"name":"近10日涨跌幅","field":"pct10","adj":0},{"name":"当日换手率","field":"tr","adj":0}],"财务报表":[{"利润表":[{"name":"扣非净利润","field":"npana","adj":1},{"name":"营业成本","field":"bc","adj":1},{"name":"归属于母公司所有者的净利润","field":"np","adj":1},{"name":"净利润","field":"npt","adj":1},{"name":"营业总成本","field":"tbc","adj":1},{"name":"营业收入","field":"bi","adj":1},{"name":"少数股东损益归属于母公司所有者的净利润","field":"mg","adj":1},{"name":"营业总收入","field":"tbi","adj":1},{"name":"利润总额","field":"tp","adj":1},{"name":"营业利润","field":"bp","adj":1}]},{"每股数据":[{"name":"每股净资产","field":"psf","adj":1},{"name":"每股经营现金流","field":"ocps","adj":1},{"name":"每股未分配利润","field":"upps","adj":1},{"name":"扣除非经常性损益后的每股收益","field":"beps","adj":1},{"name":"每股收益","field":"epsdiluted","adj":1},{"name":"稀释每股收益","field":"epsweighted","adj":1},{"name":"每股资本公积金","field":"csps","adj":1}]},{"资产负债表":[{"name":"预收款项","field":"prec","adj":1},{"name":"货币资金","field":"cur","adj":1},{"name":"流动负债","field":"cl","adj":1},{"name":"非流动资产","field":"nca","adj":1},{"name":"资产合计","field":"ta","adj":1},{"name":"应付账款","field":"pay","adj":1},{"name":"资本公积","field":"csps","adj":1},{"name":"存货","field":"inv","adj":1},{"name":"归属于母公司股东权益","field":"eq","adj":1},{"name":"应收账款","field":"rec","adj":1},{"name":"长期投资","field":"li","adj":1},{"name":"非流动负债","field":"ncl","adj":1},{"name":"少数股东权益","field":"me","adj":1},{"name":"负债合计","field":"tl","adj":1},{"name":"无形资产","field":"ia","adj":1},{"name":"股东权益合计","field":"the","adj":1},{"name":"固定资产","field":"fa","adj":1},{"name":"未分配利润","field":"up","adj":1},{"name":"流动资产","field":"ca","adj":1},{"name":"商誉","field":"goodwill","adj":0}]},{"现金流量表":[{"name":"经营活动产生的现金流量净额","field":"bncf","adj":1},{"name":"期末现金及现金等价物余额","field":"fcb","adj":1},{"name":"现金及现金等价物净增加额","field":"cnr","adj":1},{"name":"投资活动产生的现金流量净额","field":"incf","adj":1},{"name":"筹资活动产生的现金流量净额","field":"fncf","adj":1}]};
  deleteItem(index: number, item: any) {
    this.toolList[this.currenttabIndex].forEach((element: any) => {
      if (element.field == item.field) {
        element.checked = false;
      }
    });
    this.selectedList.splice(index, 1);
  }

  async startSelect() {
    let option: any = {
      category: "CN",
      exchange: this.exchange,
      areacode: this.areacode,
      indcode: this.indcode,
      order_by: "symbol",
      order: "desc",
      page: 1,
      size: 30,
      only_count: 0,
      current: "",
      pct: "",
      // pettm: "",
      _: Date.now(),
      // field: ""
    }
    this.selectedList.forEach((item, index) => {
      if (parseFloat(item.cmax) < parseFloat(item.cmin)) {
        option[item.field] = item.cmax + "_" + item.cmin;
      } else {
        option[item.field] = item.cmin + "_" + item.cmax;
      }
    });
    this.stockList = await this.newsService.getstockListData(option);
    this.stockList = this.stockList.data.list;
    console.log(this.stockList);

  }
}
