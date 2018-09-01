## How to use this template:


```bash
    1、使用ionic3项目模板首先要配置ionic项目运行环境
    2、要配置环境先安装node.js(安装方法百度)
    3、node -v 查看是否安装成功
    4、npm -v 查看npm是否安装成功
    5、npm install -g cordova ionic 安装全局的 cordova 和 ionic
    6、ionic -v 查看ionic是否安装成功
    7、克隆该项目到本地
    8、cd到项目根目录
    9、npm install 安装依赖项
    10、ionic serve 运行该项目

注意：
     1、如果你的ionic环境都已经搭建完成，或者在你电脑上已经不止一次运行过ionic项目的情况下可以省略前六步直接执行7-10步查看项目（至于样式就靠你自己研究了）。
     2、该项目用的数据请求地址为 http://jsonplaceholder.typicode.com/ 中的地址，若是本项目中的地址失效可自行在src/providers/http-services/http-services.ts文件中自行配置自己的域名，之后在执行数据请求的页面配置地址即可
```

如何在ionic3项目中使用httpclient
```bash
  1、在ionic3项目根目录下执行 ionic g provider http-services,执行该命令后在src目录下会出现providers文件，在providers文件下有一个名为 http-        services 的 httpclient 数据请求服务,
  2、在app.module.ts中引入该数据请求服务
     import { HttpServicesProvider } from '../providers/http-services/http-services'; 
     并在providers中注入：
     providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      HttpServicesProvider //注册自定义的数据请求服务
     ]
   3、在app.module.ts中引入HttpClientModule模块：
      import { HttpClientModule } from '@angular/common/http';
      并在imports中注入该模块
       imports: [
        HttpClientModule, //注入数据请求模块
        BrowserModule,
        IonicModule.forRoot(MyApp)
      ],
    4、在数据请求服务http-services文件中也要引入HttpClientModule模块以及HttpHeaders,HttpParams模块：
       import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
       并且声明HttpClient模块：
       constructor(public http: HttpClient) {
         console.log('Hello HttpServicesProvider Provider');
       }
    5、在数据请求服务http-services文件中书写数据请求方法以及数据提交方法，详情可以到本项目中去查看
    6、在要使用数据请求的页面中引入该数据请求服务：
      import { HttpServicesProvider } from '../../providers/http-services/http-services'; // 引入自定义的 数据请求服务
    7、声明该数据请求服务并调用（详情可以到该项目中去查看）：
        constructor(public navCtrl: NavController,public httpService: HttpServicesProvider) {
          this. videoRequstData();  //调用数据请求函数
          this. videoPostData();    //调用数据发送函数
        }
```
