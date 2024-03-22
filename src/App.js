import "./App.css";
import Banner from "./components/banner.js";
import Navbar from "./components/navbar.js";
import Image from "./components/image.js";
import Features from "./components/features.js";
import Bestseller from "./components/bestseller.js";
import Deal from "./components/time.js";
import Sale from "./components/sale.js";
import Footer from "./components/footer.js";
import { useEffect, useState } from "react";
import Newproduct from "./components/newproduct";
import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import ProductDetails from "./components/productDetails.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./components/cartpage";

const url = "https://ogami-api.vercel.app/api/product";
function App() {
  const [products, setProducts] = useState([]);
  const [wishlist, setwishlist] = useState([]);
  const [count, setcount] = useState({
    products: [],
    totalPrice: 0,
  });
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Banner />
          <Navbar cart={count} />
          <Image />
          <Features
            data={products}
            cart={count}
            setcount={setcount}
            wishlist={wishlist}
            setwishlist={setwishlist}
          />
          <Deal />
          <Bestseller data={products} />
          <Newproduct data={products} />
          <Sale />
          <Footer />
        </div>
      ),
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/:productId",
      element: <ProductDetails />,
    },
    {
      path: "/cart",
      element: <CartPage cart={count} setcount={setcount} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
