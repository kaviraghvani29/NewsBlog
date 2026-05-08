import React from "react";

const Sports = () => {
  const news = [
    {
      title: "Football Championship Finals Begin",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
      desc: "Top football teams are ready for the championship finals.",
    },

    {
      title: "Cricket Team Wins Series",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      desc: "The national cricket team secured a historic victory.",
    },

    {
      title: "Olympic Preparation Starts",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      desc: "Athletes are preparing for the upcoming Olympic games.",
    },

    {
      title: "Tennis Star Breaks Record",
      image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3",
      desc: "A famous tennis player achieved a new world record.",
    },

    {
      title: "Basketball League Gets Popular",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      desc: "Basketball fans are increasing across the country.",
    },

    {
      title: "Formula Racing Event Announced",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      desc: "International racing teams will compete this weekend.",
    },

    {
      title: "Young Swimmer Wins Gold",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487",
      desc: "A teenage swimmer won gold in the national competition.",
    },

    {
      title: "Badminton Tournament Starts",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
      desc: "Players from different countries joined the tournament.",
    },

    {
      title: "Fitness Awareness Growing",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      desc: "People are becoming more interested in sports fitness.",
    },

    {
      title: "Hockey Team Announces Squad",
      image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8",
      desc: "The hockey federation announced its final player squad.",
    },
  ];

  return (
    <>
      <header className="header">
        <h1>Latest Sports News</h1>
        <p>Top sports headlines from around the world</p>
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

export default Sports;
