import Brands from './components/Brands/Brands'
import BaseLayout from './components/BaseLayout/BaseLayout'
import PromotedProducts from './components/PromotedProducts/PromotedProducts';
import Divider from './lib/Divider/Divider';
import { getBestSelling, getMostViewed, getNewProducts, getPromotedProducts } from "./apis/products";
import NewAddedProducts from './components/NewProducts/NewProducts';
import { Suspense } from 'react';
import MostViewedProducts from './components/MostViewedProducts/MostViewedProducts';
import BestSellingProducts from './components/BestSellingProducts/BestSellingProducts';
import Spinner from './lib/Spinner/Spinner';


export default async function Home() {
  const promotedPromise = getPromotedProducts();
  const newProductsPromise = getNewProducts("16/6/2023");
  const mostViewedPromise = getMostViewed();
  const getBestSellingPromise = getBestSelling();
  const [promoted] = await Promise.all([promotedPromise])
  return (
    <BaseLayout>
      <PromotedProducts products={promoted["promoted-products"]} />
      <Divider />
      <Brands />
      <Divider />
      <Suspense fallback={<Spinner />}>
        <NewAddedProducts promise={newProductsPromise} />
      </Suspense>
      <Divider />
      <Suspense fallback={<Spinner />}>
        <MostViewedProducts promise={mostViewedPromise} />
      </Suspense>
      <Divider />
      <Suspense fallback={<Spinner />}>
        <BestSellingProducts promise={getBestSellingPromise} />
      </Suspense>
    </BaseLayout>
  )
}
