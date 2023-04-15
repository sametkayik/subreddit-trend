import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar/Navbar";
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
          <Favorites />
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
