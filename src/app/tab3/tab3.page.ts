import { Component } from '@angular/core';
import { GetdataService } from '../services/getdata.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public plist: any = [];
  public cartlist: any = [];
  public config: any = {};
  constructor(private gdata: GetdataService) {
    this.config = this.gdata.config;
  }
  ngOnInit() {
    this.getplist();
  }

  //获取购物车列表数据
  getplist() {
    let api = 'shop/api/plist.php';
    this.gdata.getApiData(api).then((response: any) => {
      this.plist = response.result;
    });
  }

}
