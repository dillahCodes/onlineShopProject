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
import UserPageLayout from "../components/layouts/user-page-layout";
import UserPage from "../pages/user-page";
import EditUserProfilePage from "../pages/edit-user-profile-page";
import EditUserPageLayout from "../components/layouts/edit-user-page-layout";
import EditUserInfoPageLayout from "../components/layouts/edit-user-info-page-layout";
import ChangeNamePage from "../pages/change-name-page";
import ChangeUserNamePage from "../pages/change-username-page";
import ChangeUserBioPage from "../pages/change-user-bio-page";
import ChangeUserEmailPage from "../pages/change-user-email-page";
import ChangeUserPhoneNumberPage from "../pages/change-user-phone-number-page";
import ChangeUserGenderPage from "../pages/change-user-gender-page";
import ChangeUserBirthPage from "../pages/change-user-birth-page";

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
    path: "/user",
    element: (
      <UserPageLayout>
        <UserPage />
      </UserPageLayout>
    ),
  },
  {
    path: "/user/settings",
    element: (
      <EditUserPageLayout>
        <EditUserProfilePage />
      </EditUserPageLayout>
    ),
  },
  {
    path: "/user/profile",
    children: [
      {
        path: "name",
        element: (
          <EditUserInfoPageLayout>
            <ChangeNamePage />
          </EditUserInfoPageLayout>
        ),
      },
      {
        path: "username",
        element: (
          <EditUserInfoPageLayout>
            <ChangeUserNamePage />
          </EditUserInfoPageLayout>
        ),
      },
      {
        path: "bio",
        element: (
          <EditUserInfoPageLayout>
            <ChangeUserBioPage />
          </EditUserInfoPageLayout>
        ),
      },
      {
        path: "email",
        element: (
          <EditUserInfoPageLayout>
            <ChangeUserEmailPage />
          </EditUserInfoPageLayout>
        ),
      },
      {
        path: "phone",
        element: (
          <EditUserInfoPageLayout>
            <ChangeUserPhoneNumberPage />
          </EditUserInfoPageLayout>
        ),
      },
      {
        path: "gender",
        element: (
          <EditUserInfoPageLayout>
            <ChangeUserGenderPage />
          </EditUserInfoPageLayout>
        ),
      },
      {
        path: "birth",
        element: (
          <EditUserInfoPageLayout>
            <ChangeUserBirthPage />
          </EditUserInfoPageLayout>
        ),
      },
    ],
  },
  {
    path: "/coming-soon",
    element: <ComingSoonPage />,
  },
  {
    path: "/product",
    children: [
      {
        path: ":productId",
        element: (
          <DetailsProductLayout>
            <DetailsProductPage />
          </DetailsProductLayout>
        ),
      },
      {
        path: ":productId/reviews",
        element: (
          <AllProductReviewsLayout>
            <AllProductReviewsPage />
          </AllProductReviewsLayout>
        ),
      },
      {
        path: ":productId/talk",
        children: [
          {
            path: "",
            element: (
              <DetailsProductDiscussLayout>
                <DetailsProductDiscussionPage />
              </DetailsProductDiscussLayout>
            ),
          },
          {
            path: ":discussionId",
            element: (
              <DetailsProductDetailsDiscussLayout>
                <DetailsProductDetailsDiscussionPage />
              </DetailsProductDetailsDiscussLayout>
            ),
          },
        ],
      },
      {
        path: "search",
        element: (
          <SearchResultProductsLayout>
            <ResultSearchPage />
          </SearchResultProductsLayout>
        ),
      },
    ],
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
]);
export default routers;
