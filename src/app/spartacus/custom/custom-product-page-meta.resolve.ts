import { Injectable } from "@angular/core";
import { BasePageMetaResolver, Page, PageLinkService, PageType, ProductPageMetaResolver, ProductService, RoutingService, TranslationService } from "@spartacus/core";
import { Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomProductPageMetaResolver extends ProductPageMetaResolver {
  constructor(
    protected routingService: RoutingService,
    protected productService: ProductService,
    protected translation: TranslationService,
    protected basePageMetaResolver: BasePageMetaResolver,
    protected pageLinkService: PageLinkService
  ) {
    super(routingService, productService, translation, basePageMetaResolver, pageLinkService);
    //debugger;
    this.pageType = PageType.PRODUCT_PAGE;
    this.pageTemplate = 'MyProductPageTemplate'
  }

  resolveCanonicalUrl(): Observable<string> {
    //debugger;
    return this.product$.pipe(
      switchMap((product) => this.findBaseProduct(product)),
      map((product) => {
        const url = this.routingService.getFullUrl({
          cxRoute: 'product',
          params: product,
        });
        return this.pageLinkService.getCanonicalUrl({}, url);
      })
    );
  }

  getScore(page: Page): number {
   // debugger;
    return 1000;
  }
}
