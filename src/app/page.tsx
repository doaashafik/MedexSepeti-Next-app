import { Suspense } from 'react';
import Brands from './components/Brands/Brands'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Divider from './lib/Divider/Divider';
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import { getBestSelling, getMostViewed, getNewProducts, getPromotedProducts } from "./apis/products";
import MostViewedProducts from './components/MostViewedProducts/MostViewedProducts';
import Spinner from './lib/Spinner/Spinner';
import BestSellingProducts from './components/BestSellingProducts/BestSellingProducts';
import PromotedProducts from './components/PromotedProducts/PromotedProducts';
import NewAddedProducts from './components/NewProducts/NewProducts';



export default async function Home() {
  const promotedPromise = getPromotedProducts();
  const [promoted] = await Promise.all([promotedPromise])
  const newProductsPromise = getNewProducts("16/6/2023");
  const mostViewedPromise = getMostViewed();
  const getBestSellingPromise = getBestSelling();
  return (
    <BaseLayout>
      <ErrorBoundary fallback={<h3>Something Went Wrong!</h3>}>
        <PromotedProducts products={promoted} />
        <Divider className="promoted-product-divider"/>
        <Suspense fallback={<Spinner />}>
          <MostViewedProducts promise={mostViewedPromise} />
        </Suspense>
        <Divider />
        <Brands />
        <Suspense fallback={<Spinner />}>
          <BestSellingProducts promise={getBestSellingPromise} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
        <NewAddedProducts promise={newProductsPromise} />
      </Suspense>
      </ErrorBoundary>
    </BaseLayout>
  )
}
