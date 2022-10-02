import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Me from "./pages/Me";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import './index.scss'
import Topic from "./comp/Topic";
import { useEffect } from "react";
const Layout = () => {
  return (<>
    <Navbar />
    <Outlet />
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
    element:<ScrollToTop> <Layout /> </ScrollToTop>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/article/:id', element: <Single /> },
      { path: '/topic/:topic', element: <Topic /> },
      { path: '/write', element: <Write /> },
    ],
  },
  { path: "/home", element: <Home />, },
  {
    path: "/about", element: <Layout />,
    children: [
      { path: '/about', element: <About /> },
      { path: '/about/me', element: <Me /> },
    ]
  },
  { path: "/login", element: <Login />, },
  { path: "/register", element: <Register />, },
  { path: "/write", element: <Write />, },
  { path: "/post", element: <Single />, },
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