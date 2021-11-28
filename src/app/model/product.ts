import {Category} from "./category";

export class Product {
  pid?: number;
  nameProduct?: String;  //tên sản phẩm
  image?: String;
  quantity?: number;   //số lượng
  importPrice?: number;     //giá nhập
  price?: number;  // giá bán
  discount?: number;   //chiết khấu
  description?: String;       //mô tả
  dateAdd?: Date;  // ngày nhập

  category: Category | undefined;
}
