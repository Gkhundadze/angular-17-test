import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Products } from '../../models/products';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private api:ApiService
    ) {

  }

  
  public products:Products[] = []

  ngOnInit(): void {
      this.api.getProducts().subscribe((res:any) => {
      this.products = res
    })
  }
  ngOnDestroy(): void {
    // this.obs.unsubscribe()
  }
}
