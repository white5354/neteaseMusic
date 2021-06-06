import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from '../services/services.module';
import { ShareModule } from '../share/share.module';
import zh from '@angular/common/locales/zh';
import { NZ_I18N ,zh_CN} from 'ng-zorro-antd/i18n';
// core module实际是将appmodule中的东西放进来，代替appmodule进行管理
registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  // 添加判断逻辑，只能让appmodule导入
  // 具体加这两个装饰器是干什么的，留个疑问，解说的不太清楚
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error('coreModule 只能又appModule导入');
    }
  }
 }
