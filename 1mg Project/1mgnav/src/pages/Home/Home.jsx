import React from "react";
import Advertisement from "../Products/components/Adevertisement/Advertisement";
import Ayurved from "../Products/components/Ayurveda";
import FeaturedBrand from "../Products/components/FeaturedBrand";
import Healthconcern from "../Products/components/HealthConcern";
import PopularCategories from "../Products/components/PopularCategories";
import ShopByConcern from "../Products/components/ShopByConcern";
import ComboDeals from "./Home_products/ComboDeals.jsx";
import DealsDay from "./Home_products/DealsDay.jsx";
import Flashdeals from "./Home_products/FlashDeals.jsx";
import ProductDetails from "./Home_products/ProductDetails.jsx";
import TataMg from "./Home_products/TataMg.jsx";
import Trending from "./Home_products/Trending.jsx";
import {Footer} from "../Footer/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f1f4f6" }}>
      <Advertisement />
      <FeaturedBrand />
      <Trending />
      <ProductDetails />
      <PopularCategories />
      <DealsDay />
      <ShopByConcern />
      <TataMg />
      <ComboDeals />

      <Healthconcern />
      <Flashdeals />
      <Ayurved />
      <Footer />
    </div>
  );
};

export default Home;
