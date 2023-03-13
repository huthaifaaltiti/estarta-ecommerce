// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// API's, react
import { lazy, Suspense } from "react";
// styles
import "./App.css";
// component
import NavBar from "./components/NavBar";

// pages
const Welcome = lazy(() => import("./pages/Welcome/index"));
const LoginPage = lazy(() => import("./pages/Login/index"));
const Products = lazy(() => import("./pages/Products/index"));
const NotFound = lazy(() => import("./pages/NotFound/index"));
const Cart = lazy(() => import("./pages/Cart/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
