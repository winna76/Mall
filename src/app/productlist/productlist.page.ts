import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular'
import { GetdataService } from '../services/getdata.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  @ViewChild(IonContent) ic: IonContent;
  public productlist: any = [];
  public config: any = {};
  public cid: any = '';
  public page: number = 1;
  public selectedid: number = 1;
  public sort: any = '_id:1';
  public subheader: any = [{
    id: 1,
    title: '综合',
    field: '_id',  //排序依据
    sort: 1   //升序
  }, {
    id: 2,
    title: '销量',
    field: 'salecount',  //排序依据
    sort: 1   //升序
  }, {
    id: 3,
    title: '价格',
    field: 'price',  //排序依据
    sort: 1   //升序
  }];
  constructor(public nav: NavController, public gdata: GetdataService, public ac: ActivatedRoute) {
    this.config = this.gdata.config;
    this.ac.queryParams.subscribe((data: any) => {
      this.cid = data.cid;
      this.getProductList(null);
    });
  }

  ngOnInit() {

  }

  goback() {
    this.nav.back();
  }
  search() { }
  getProductList(event: any) {
    let api = 'shop/api/plist.php?cid=' + this.cid + '&page=' + this.page + '&sort=' + this.sort;
    this.gdata.getApiData(api).then((response: any) => {
      this.productlist = this.productlist.concat(response.result);
      this.page++;
      if (event) {
        event.target.complete();
        if (response.result.length < 8) {
          event.target.disabled = true;
        }
      }
    });
  }

  headerchange(id: any) {
    this.selectedid = id;
    this.productlist = [];
    this.page = 1;
    //"price:1"  按价格升序    "_id:1" 按id升序  "salecount:-1" 按销量降序
    this.sort = this.subheader[id - 1].field + ':' + this.subheader[id - 1].sort;
    this.subheader[id - 1].sort = this.subheader[id - 1].sort * (-1);
    this.ic.scrollToTop(0);
    this.getProductList(null);
  }

}
