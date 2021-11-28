import {Injectable} from '@angular/core';
import {Supplier} from "../model/supplier";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  supplier: Supplier[] = [];

  constructor(private http: HttpClient) {
  }

  getAll() {
    this.http.get<Supplier[]>('http://localhost:8080/kimkhi/suppliers/').subscribe((data) => {
      this.supplier = data;
    })
  }
}
