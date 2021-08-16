import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'
import { pid } from 'process';
import { GetdataService } from '../services/getdata.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public lcatelist: any = [];
  public rcatelist: any = [];
  public config: any = {};
  public rparentid = '';
  constructor(private nav: NavController, private gdata: GetdataService) {
    this.config = this.gdata.config;
  }

  ngOnInit() {
    this.getLcate();
    this.getRcate(pid);
  }


  //获取左边父级数据
  getLcate() {
    let api = 'shop/api/pcate.php';
    this.gdata.getApiData(api).then((response: any) => {
      this.lcatelist = response.result;
      this.getRcate(this.lcatelist[0]._id);
    });
  }


  //获取右边子级数据
  getRcate(pid) {
    this.rparentid = pid;
    let api = 'shop/api/pcate.php?pid=' + pid;
    this.gdata.getApiData(api).then((response: any) => {
      this.rcatelist = response.result;
    });
  }


  gosearch() {
    this.nav.navigateForward('/search');
  }

}
