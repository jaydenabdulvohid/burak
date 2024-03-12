import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  producDesc?: string;
  productImages?: string[];
  productViews?: number;
}
