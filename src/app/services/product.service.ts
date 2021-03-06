import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges().map(products => {
      return products.map(a => {
        const prod = a.payload.val();
        const id = a.payload.key;
        return { id, ...prod };
      });
    });
  }

  get(productId) {
    return this.db.object(`products/${productId}`);
  }
  update(productId, product) {
    return this.db.object(`/products/${productId}`).update(product);
  }
  delete(productId) {
    return this.db.object(`/products/${productId}`).remove();
  }
}
