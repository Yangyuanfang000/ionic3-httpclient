import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServicesProvider {

  public apiUrl = "http://jsonplaceholder.typicode.com/";   // 请求api的域名

  private httpOptions = {                         // 实例化 Headers 即设置post传值的格式
    headers: new HttpHeaders({
      'Content-Type':  ' application/x-www-form-urlencoded',
    }),
    // params: new HttpParams().set('id', '3'),  //使用请求头时需要传的参数（get方式的传参）
  };

  constructor(public http: HttpClient) {
    console.log('Hello HttpServicesProvider Provider');
  }

  //请求数据的方法 异步请求需要callback返回
  requestData(url){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  //post提交数据方法
  doPost(url,data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+url, data, this.httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }




}
