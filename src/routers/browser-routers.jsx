import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import DetailsProductPage from "../pages/details-product-page/details-product-page";
import LoginPage from "../pages/login-page/login-page";
import RegisterPage from "../pages/register-page/register-page";
import MainLayout from "../components/layouts/main-layout";
import DetailsProductLayout from "../components/layouts/details-product-layout";
import AllProductReviewsPage from "../pages/all-product-reviews-page/all-product-reviews-page";
import AllProductReviewsLayout from "../components/layouts/all-product-reviews-layout";

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
