import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SlickCarouselModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(
    private http: ApiService,
    private route:ActivatedRoute
    ) {}

  public productId:any
  public product:any = {}
  public similarProducts:any = []
  
  ngOnInit(): void {
    
    this.route.params.subscribe(({id}) => {
      this.productId = id
      
    })
    this.http.getSingleProduct(this.productId).subscribe((res:any) => {
      this.product = res
      this.getSimilarProducts(this.product.category)
    })
  }
  getSimilarProducts(category: string) {
    this.http.getProductsByCategory(category).subscribe((res:any) => {
      console.log(res);
      
      this.similarProducts = res
    })
  }
  ngOnDestroy(): void {
    // this.http.getSingleProduct(this.productId).unsubscribe()
  }
  
  slideConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1
  };
  
  addSlide() {
   
  }
  
  removeSlide() {
   
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

}
