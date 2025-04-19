import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, PageMetaConfig, ProductPageMetaResolver, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, MediaComponent, mediaConfig } from "@spartacus/storefront";
import { CustomProductPageMetaResolver } from './custom/custom-product-page-meta.resolve';
import { CustomMediaComponent } from './custom/custom-media.component';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://40.76.109.9:9002',
      }
    },
    pwa: {
      enabled: false
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    },
  }),
  {
    provide: ProductPageMetaResolver,
    useClass: CustomProductPageMetaResolver,
  },
  provideConfig(<PageMetaConfig>{
    pageMeta: {
      resolvers: [{
        property: 'description',
        method: 'resolveDescription',
        disabledInCsr: false,
      },
      {
        property: 'canonicalUrl',
        method: 'resolveCanonicalUrl',
        disabledInCsr: false,
      },
      ],
    }
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  })]
})
export class SpartacusConfigurationModule { }
