import "./App.css";
import Home from "./components/Home";
import FavoritesList from "./components/FavoritesList";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/favorites",
      element: (
        <>
          <Navbar />
          <FavoritesList />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
