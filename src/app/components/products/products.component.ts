import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartItem } from '../../models/shopping-cart-item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  filteredProducts: Product[] = [];
  category: string;
  shoppingCart: ShoppingCart;

  constructor(
    route: ActivatedRoute,
    productService: ProductService
  ) {
    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }

  ngOnInit() {
    this.shoppingCart = new ShoppingCart(null);
  }

}
