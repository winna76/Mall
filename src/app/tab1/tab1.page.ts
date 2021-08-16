import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild("slide") slide;
  public slidelist: any = [];
  public slides: any;
  public hotlist: any = [];
  public plist: any = [];
  public config: any = {};
  constructor(private nav: NavController, private gdata: GetdataService) {

    this.config = this.gdata.config;

    this.slides = {
      speed: 2000,
      autoplay: {
        delay: 2000
      },
      loop: true
    }

  }

  ngOnInit() {
    this.getSlides();
    this.getHotlist();
    this.getProductlist();
  }

  //获取滚动图数据
  getSlides() {
    let api = 'shop/api/focus.php';
    this.gdata.getApiData(api).then((response: any) => {
      this.slidelist = response.result;
      console.log(this.slidelist);
    });
  }

  //获取滑动图数据
  getHotlist() {
    let api = 'shop/api/photlist.php';
    this.gdata.getApiData(api).then((response: any) => {
      this.hotlist = response.result;
    });
  }


  //获取商品列表数据
  getProductlist() {
    let api = 'shop/api/plist.php';
    this.gdata.getApiData(api).then((response: any) => {
      this.plist = response.result;
    });
  }

  SlideTouchEnd(): void {
    this.slide.startAutoplay();
  }
  gosearch() {
    this.nav.navigateForward('/search');
  }


}
