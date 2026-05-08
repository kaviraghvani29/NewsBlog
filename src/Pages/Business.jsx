import React from "react";

const Business = () => {
  const news = [
    {
      title: "Stock Market Hits New High",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      desc: "Global investors saw strong gains in technology shares.",
    },

    {
      title: "Startup Companies Growing Fast",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      desc: "New startups are attracting millions in funding.",
    },

    {
      title: "Banking Sector Expands Services",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      desc: "Banks introduced digital payment systems for users.",
    },

    {
      title: "International Trade Increased",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      desc: "Countries reported major growth in export business.",
    },

    {
      title: "Real Estate Market Rising",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      desc: "Property prices continue to rise in major cities.",
    },

    {
      title: "Small Businesses Go Online",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      desc: "Local businesses are increasing online sales rapidly.",
    },

    {
      title: "Tech Companies Hire More Workers",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "IT companies opened thousands of new job positions.",
    },

    {
      title: "Electric Vehicle Sales Increase",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      desc: "Consumers are showing more interest in electric cars.",
    },

    {
      title: "Retail Industry Shows Growth",
      image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735",
      desc: "Shopping malls reported increased customer traffic.",
    },

    {
      title: "Global Oil Prices Change",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      desc: "Oil companies are adjusting prices after market shifts.",
    },
  ];

  return (
    <>
      <header className="header">
        <h1>Latest Business News</h1>
        <p>Top business headlines from around the world</p>
      </header>

      <div className="general-container">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt="" />

            <div className="news-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Business;
