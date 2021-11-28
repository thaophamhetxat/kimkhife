import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  constructor(private http: HttpClient) {
  }

  getAllCategory() {
    this.http.get<Category[]>('http://localhost:8080/kimkhi/categories/').subscribe((data) => {
      this.categories = data;
    })
  }
}
