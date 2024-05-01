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
]);

export default routers;
