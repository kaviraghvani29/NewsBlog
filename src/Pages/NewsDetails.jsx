import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();

  const news = location.state;

  return (
    <div>
      <img src={news.image} alt="" />

      <h1>{news.title}</h1>

      <p>{news.details}</p>
    </div>
  );
};

export default NewsDetails;
