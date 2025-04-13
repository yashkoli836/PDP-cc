import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductDetails } from "./ProductDetails";
import { RelatedProducts } from "./RelatedProducts";
import { Footer } from "./Footer";

export function ProductPage() {
  return (
    <div className="flex flex-col gap-10 p-4 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <ProductGallery />
        <ProductInfo />
      </div>
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </div>
  );
}
