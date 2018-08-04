import { Product } from '../../../models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  filteredProducts;
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.filteredProducts = products;
      });
  }


  filter(query: string) {
      this.filteredProducts = (query) ?
      this.filteredProducts.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.filteredProducts;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
