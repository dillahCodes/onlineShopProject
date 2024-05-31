import { Routes, Route } from "react-router-dom";
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
import UserAccountSecurityPage from "../pages/user-account-security-page";
import UserAccountSecurityChangePasswordPage from "../pages/user-account-security-change-password-page";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />

      <Route
        path="/user"
        element={
          <UserPageLayout>
            <UserPage />
          </UserPageLayout>
        }
      />
      <Route
        path="/user/settings"
        element={
          <EditUserPageLayout>
            <EditUserProfilePage />
          </EditUserPageLayout>
        }
      />

      <Route
        path="/user/profile/name"
        element={
          <EditUserInfoPageLayout>
            <ChangeNamePage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/profile/username"
        element={
          <EditUserInfoPageLayout>
            <ChangeUserNamePage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/profile/bio"
        element={
          <EditUserInfoPageLayout>
            <ChangeUserBioPage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/profile/email"
        element={
          <EditUserInfoPageLayout>
            <ChangeUserEmailPage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/profile/phone"
        element={
          <EditUserInfoPageLayout>
            <ChangeUserPhoneNumberPage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/profile/gender"
        element={
          <EditUserInfoPageLayout>
            <ChangeUserGenderPage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/profile/birth"
        element={
          <EditUserInfoPageLayout>
            <ChangeUserBirthPage />
          </EditUserInfoPageLayout>
        }
      />

      <Route
        path="/user/settings/security"
        element={
          <EditUserInfoPageLayout>
            <UserAccountSecurityPage />
          </EditUserInfoPageLayout>
        }
      />
      <Route
        path="/user/settings/security/reset-password"
        element={
          <EditUserInfoPageLayout>
            <UserAccountSecurityChangePasswordPage />
          </EditUserInfoPageLayout>
        }
      />

      <Route path="/coming-soon" element={<ComingSoonPage />} />

      <Route
        path="/product/:productId"
        element={
          <DetailsProductLayout>
            <DetailsProductPage />
          </DetailsProductLayout>
        }
      />
      <Route
        path="/product/:productId/reviews"
        element={
          <AllProductReviewsLayout>
            <AllProductReviewsPage />
          </AllProductReviewsLayout>
        }
      />

      <Route
        path="/product/:productId/talk"
        element={
          <DetailsProductDiscussLayout>
            <DetailsProductDiscussionPage />
          </DetailsProductDiscussLayout>
        }
      />
      <Route
        path="/product/:productId/talk/:discussionId"
        element={
          <DetailsProductDetailsDiscussLayout>
            <DetailsProductDetailsDiscussionPage />
          </DetailsProductDetailsDiscussLayout>
        }
      />

      <Route
        path="/product/search"
        element={
          <SearchResultProductsLayout>
            <ResultSearchPage />
          </SearchResultProductsLayout>
        }
      />

      <Route
        path="/feed"
        element={
          <FeedPageLayout>
            <FeedPage />
          </FeedPageLayout>
        }
      />
      <Route
        path="/discovery"
        element={
          <OfficialPageLayout>
            <OfficialStorePage />
          </OfficialPageLayout>
        }
      />
      <Route
        path="/wishlist"
        element={
          <WishListPageLayout>
            <WishlistPage />
          </WishListPageLayout>
        }
      />
      <Route
        path="/order-list"
        element={
          <ReceiptPageLayout>
            <ReceiptPage />
          </ReceiptPageLayout>
        }
      />
    </Routes>
  );
}

export default AppRouter;
