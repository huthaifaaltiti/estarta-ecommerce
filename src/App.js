// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// API's, react
import { lazy, Suspense } from "react";
// styles
import "./App.css";

// pages
const Home = lazy(() => import("./pages/Cart/index"));
const Login = lazy(() => import("./pages/Login/index"));
const Products = lazy(() => import("./pages/Products/index"));
const NotFound = lazy(() => import("./pages/NotFound/index"));
const Cart = lazy(() => import("./pages/Cart/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
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
