import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import HomePage from "../pages/home-page/home-page";
import DetailsProductLayout from "../layouts/details-product-layout";
import DetailsProductPage from "../pages/details-product-page/details-product-page";
import AllProductReviewsPage from "../pages/all-product-reviews/all-product-reviews-page";
import AllProductReviewsLayout from "../layouts/all-product-reviews-layout";
import LoginPage from "../pages/login-page/login-page";
import RegisterPage from "../pages/register-page/register-page";

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
]);

export default routers;
