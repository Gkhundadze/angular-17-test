import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Products } from '../../models/products';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoaderComponent } from '../../components/loader/loader.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, LoaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private api:ApiService
    ) {

  }

  public products:Products[] = []
  public noProducts:boolean = true
  public categories:string[] = []
  public noCategories:boolean = true
  public currentCategory:string | null = null
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories()
  }
  ngOnDestroy(): void {
    // this.obs.unsubscribe()
  }
  getAllProducts() {
    this.api.getProducts().subscribe((res:any) => {
      this.products = res
      this.noProducts = !this.noProducts
      if(this.products.length > 0){
        this.noProducts = false
      }else {
        this.noProducts = true
      }
      
    })
    this.currentCategory = null
  }
  getAllCategories() {
    this.api.getAllCategories().subscribe((res:string[]) => {
      this.categories = res
      if(this.categories.length > 0) {
        this.noCategories = false
      }
    })
  }
  filterByCategory(category:string):any {
    this.currentCategory = category
    this.api.getProductsByCategory(category).subscribe((res:any) => {
      this.products = res
    })
  }
}
