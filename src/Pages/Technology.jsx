import React from "react";

const Technology = () => {
  const news = [
    {
      title: "AI Tools Becoming More Powerful",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      desc: "New AI technologies are improving productivity worldwide.",
    },

    {
      title: "New Smartphone Launch Announced",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      desc: "Tech companies introduced advanced smartphone features.",
    },

    {
      title: "Cyber Security Awareness Rising",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      desc: "Experts warned users about increasing online threats.",
    },

    {
      title: "Software Developers In High Demand",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "Companies are hiring thousands of skilled developers.",
    },

    {
      title: "Electric Cars Use Smart Technology",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      desc: "Modern vehicles now include AI-based driving systems.",
    },

    {
      title: "Gaming Industry Expands Rapidly",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      desc: "Online gaming platforms gained millions of new users.",
    },

    {
      title: "Cloud Computing Services Grow",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      desc: "Businesses are moving data storage to cloud platforms.",
    },

    {
      title: "Robotics Industry Shows Progress",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
      desc: "New robots are helping industries improve efficiency.",
    },

    {
      title: "Space Technology Reaches New Heights",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      desc: "Scientists launched advanced satellites into space.",
    },

    {
      title: "Virtual Reality Becoming Popular",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
      desc: "VR technology is transforming gaming and education.",
    },
  ];

  return (
    <>
      <header className="header">
        <h1>Latest Technology News</h1>
        <p>Top technology headlines from around the world</p>
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

export default Technology;
