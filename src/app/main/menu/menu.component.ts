import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.http.get<Product[]>('http://localhost:8080/kimkhi/sanphams/').subscribe((data) => {
      this.products = data;
    })
  }
}
