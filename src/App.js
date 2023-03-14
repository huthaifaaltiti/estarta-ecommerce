// API's, react
import { lazy, Suspense } from "react";
// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// component
import NavBar from "./components/NavBar";
// component
import Spinner from "./components/Spinner";

// styles
import "./App.css";

// pages
const Welcome = lazy(() => import("./pages/Welcome/index"));
const Home = lazy(() => import("./pages/Home/index"));
const Login = lazy(() => import("./pages/Login/index"));
const Products = lazy(() => import("./pages/Products/index"));
const NotFound = lazy(() => import("./pages/NotFound/index"));
const Cart = lazy(() => import("./pages/Cart/index"));

function ProtectedRoute({ element }) {
  const { isAuth } = useSelector((state) => state.authReducer);

  if (isAuth) {
    return element;
  } else {
    return <Navigate to={"/login"} />;
  }
}

function App() {
  const { loading } = useSelector((state) => state.authReducer);

  // loading spinner
  if (loading) return <Spinner />;

  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={<Login />} />

            <Route
              path="/products"
              element={<ProtectedRoute element={<Products />} />}
            />
            <Route
              path="/cart"
              element={<ProtectedRoute element={<Cart />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
