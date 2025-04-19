import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CmsConfig, ConfigModule } from "@spartacus/core";
import { MediaModule } from '@spartacus/storefront';
import { CustomMediaComponent } from "./spartacus/custom/custom-media.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomMediaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MediaModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MediaComponent: {
          component: CustomMediaComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      routing: {
          routes: {
              category: {
                paths: ['c/:categoryCode/:categoryName'],
                paramsMapping: { categoryCode: 'code' },
              },
          }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
