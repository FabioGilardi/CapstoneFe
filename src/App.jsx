import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";

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
          </Routes>
        </main>
        <CustomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
