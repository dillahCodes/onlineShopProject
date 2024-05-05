import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/main-layout";
import DetailsProductLayout from "../components/layouts/details-product-layout";
import AllProductReviewsLayout from "../components/layouts/all-product-reviews-layout";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import DetailsProductPage from "../pages/details-product-page";
import AllProductReviewsPage from "../pages/all-product-reviews-page";
import ComingSoonPage from "../pages/coming-soon-page";
import ResultSearchPage from "../pages/result-search-page";
import SearchResultProductsLayout from "../components/layouts/search-result-products-layout";
import FeedPageLayout from "../components/layouts/feed-page-layout";
import FeedPage from "../pages/feed-page";
import OfficialPageLayout from "../components/layouts/official-page-layout";
import OfficialStorePage from "../pages/official-store-page";
import WishListPageLayout from "../components/layouts/wishlist-page-layout";
import WishlistPage from "../pages/wishlist-page";
import ReceiptPageLayout from "../components/layouts/receipt-page-layout";
import ReceiptPage from "../pages/receipt-page";
import DetailsProductDiscussLayout from "../components/layouts/details-product-discuss-layout";
import DetailsProductDiscussionPage from "../pages/details-product-discussion-page";
import DetailsProductDetailsDiscussLayout from "../components/layouts/details-product-details-discuss-layout";
import DetailsProductDetailsDiscussionPage from "../pages/details-product-details-discussion-page";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoonPage />,
  },
  {
    path: "/product/:productId",
    element: (
      <DetailsProductLayout>
        <DetailsProductPage />
      </DetailsProductLayout>
    ),
  },
  {
    path: "/product/:productId/reviews",
    element: (
      <AllProductReviewsLayout>
        <AllProductReviewsPage />
      </AllProductReviewsLayout>
    ),
  },
  {
    path: "/product/search",
    element: (
      <SearchResultProductsLayout>
        <ResultSearchPage />
      </SearchResultProductsLayout>
    ),
  },
  {
    path: "/feed",
    element: (
      <FeedPageLayout>
        <FeedPage />
      </FeedPageLayout>
    ),
  },
  {
    path: "/discovery",
    element: (
      <OfficialPageLayout>
        <OfficialStorePage />
      </OfficialPageLayout>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <WishListPageLayout>
        <WishlistPage />
      </WishListPageLayout>
    ),
  },
  {
    path: "/order-list",
    element: (
      <ReceiptPageLayout>
        <ReceiptPage />
      </ReceiptPageLayout>
    ),
  },
  {
    path: "/product/:productId/talk",
    element: (
      <DetailsProductDiscussLayout>
        <DetailsProductDiscussionPage />
      </DetailsProductDiscussLayout>
    ),
  },
  {
    path: "/product/:productId/talk/:discussionId",
    element: (
      <DetailsProductDetailsDiscussLayout>
        <DetailsProductDetailsDiscussionPage />
      </DetailsProductDetailsDiscussLayout>
    ),
  },
]);

export default routers;
