import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpServicesProvider } from '../../providers/http-services/http-services'; // 引入自定义的 数据请求服务

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public postData = { "follower_id" : "666666", "befollower_id": "88888"}; //向服务器传送的数据

  public list: any;


  constructor(public navCtrl: NavController,
    public httpService: HttpServicesProvider) {

      this. videoRequstData();  //调用数据请求函数
      // this. videoPostData();    //调用数据发送函数

  }

  //请求数据
  videoRequstData() {
    this.httpService.requestData('posts')
      .then(data => {
        this.list = data;
        console.log(this.list);
      });
  }

  //发送数据
  videoPostData() {
    this.httpService.doPost('这里写上除域名之外数据提交的地址',this.postData).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }


}
