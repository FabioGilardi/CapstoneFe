import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";
import UpdateProfile from "./components/UpdateProfile";
import ChangePassword from "./components/ChangePassword";
import CollectionPage from "./components/CollectionPage";
import SingleCar from "./components/SingleCar";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactPage from "./components/ContactPage";
import Page404 from "./components/Page404";
import SellerPage from "./components/SellerPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/*" element={<Page404 />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profileUpdate" element={<UpdateProfile />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/car/:id" element={<SingleCar />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sellerSection" element={<SellerPage />} />
          </Routes>
        </main>
        <CustomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
