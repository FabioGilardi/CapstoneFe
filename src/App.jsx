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

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-center text-primary">
                  <i className="bi bi-airplane"></i> READY
                </h1>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profileUpdate" element={<UpdateProfile />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/car/:id" element={<SingleCar />} />
          </Routes>
        </main>
        <CustomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
