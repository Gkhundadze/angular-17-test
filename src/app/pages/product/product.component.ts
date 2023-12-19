import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
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
  ngOnInit(): void {
    
    this.route.params.subscribe(({id}) => {
      this.productId = id
      console.log(id);
      
    })
    this.http.getSingleProduct(this.productId).subscribe((res:any) => {
      this.product = res
      console.log(res);
      
    })
  }
  ngOnDestroy(): void {
    // this.http.getSingleProduct(this.productId).unsubscribe()
  }
}
