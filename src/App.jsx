import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Me from "./pages/Me";
import Register from "./pages/Register";
import Article from "./pages/Article";
import Write from "./pages/Write";
import './index.scss'
import Topic from "./comp/Topic";
import { useEffect } from "react";
import HomeMenu from "./comp/HomeMenu";
import HomeSide from "./comp/HomeSide";
import Write2 from "./pages/Write2";

const Layout = () => {
  return (<>
    <Navbar />
    <div className="container">
      <div className="home-layout">
        <HomeMenu />
        <Outlet className="outlet" />
        {/* <HomeSide /> */}
      </div>
    </div>
    <Footer />
  </>)
}

// scroll to top for react router dom
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return children;
}


// react router v6.4.1 setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollToTop> <Layout /> </ScrollToTop>,
    children:
      [
        { path: '/', element: <Home /> },
        { path: '/article/:id', element: <Article /> },
        { path: '/topic/:topic', element: <Topic /> },
        { path: '/write', element: <Write /> },
        { path: '/write2', element: <Write2 /> },
      ],
  },
  {
    path: "/about", element: <Layout />,
    children:
      [
        { path: '/about', element: <About /> },
        { path: '/about/me', element: <Me /> },
      ]
  },
  { path: "/login", element: <Login />, },
  { path: "/register", element: <Register />, },
  { path: "/*", element: <Error />, },
]);



const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App