import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";

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
          </Routes>
        </main>
        <CustomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
