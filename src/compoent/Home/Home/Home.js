import React from "react";
import Header from "../../Shared/Header";
import Article from "../Articel/Article";
import Banner from "../Banner/Banner";
import Products from "../Products/Procusts";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Article></Article>
      <Review></Review>
    </div>
  );
};

export default Home;
