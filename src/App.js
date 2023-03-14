// API's, react
import { lazy, Suspense, useEffect } from "react";

// react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
// component
import NavBar from "./components/NavBar";
// component
import Spinner from "./components/Spinner";

import { validateToken } from "./redux/authUser/actions";

// styles
import "./App.css";

// pages
const Welcome = lazy(() => import("./pages/Welcome/index"));
const Home = lazy(() => import("./pages/Home/index"));
const Login = lazy(() => import("./pages/Login/index"));
const Products = lazy(() => import("./pages/Products/index"));
const Cart = lazy(() => import("./pages/Cart/index"));
const NotFound = lazy(() => import("./pages/NotFound/index"));

function ProtectedRoute({ element }) {
  // {element} as destructuring or props.element if passed (props)
  const { isAuth } = useSelector((state) => state.authReducer);

  if (isAuth) {
    return element;
  } else {
    return <Navigate to={"/login"} />;
  }
}

function App() {
  const { loading, isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(() => {
    if (isAuth)
      dispatch(validateToken()).then((res) => {
        if (!res) nav("/login");
      });
  }, [isAuth]);

  // loading spinner
  if (loading) return <Spinner />;

  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <NavBar />

        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />

          <Route
            path="/products"
            element={<ProtectedRoute element={<Products />} />}
          />
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
