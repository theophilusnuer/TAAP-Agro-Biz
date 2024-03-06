import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import AboutUs from "./pages/aboutUs";
import Footer from "./components/aboutusComp/footer";
import SellingPage from "./pages/sellingPage";

const router= createBrowserRouter([
{path:'/', element:<LandingPage/>},
{path:'/aboutus', element:<AboutUs/>},
{path:'/contactus', element:<Footer/>},
{path:'/sellingpage', element:<SellingPage/>},


]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
