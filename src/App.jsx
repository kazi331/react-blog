import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
const Layout = () => {
  return (<>
    <Navbar />
    <Outlet />
    <Footer />
  </>)
}

// react router v6.4.1 setup 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/article/:id', element: <Single /> },
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
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App