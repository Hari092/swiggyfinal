import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/Menu";
import { Provider } from "react-redux";
import Store from "./utiles/appStore";
import Cart from "./components/cart";
import OderPlaced from "./components/Oderplaced";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
 
  return (window.innerWidth<800) ?
    (
      <div className="flex h-96 justify-center items-center">
        <h1 className="text-2xl font-bold text-orange-500">please view in destop mode</h1>
      </div>
    )
    :(
    <Provider store={Store}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact/",
        element: <Contact />,
      },
      {
        path: "/Resturants/:resId",
        element: <ResturantMenu />,
      },
      {
        path:"/Oderplaced",
        element: <OderPlaced />,
      }
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
