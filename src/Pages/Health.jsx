import React from "react";

const Health = () => {
  const news = [
    {
      title: "Doctors Share Healthy Diet Tips",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      desc: "Experts advised people to follow balanced meal plans daily.",
    },

    {
      title: "Morning Exercise Improves Fitness",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      desc: "Fitness trainers encourage regular exercise for good health.",
    },

    {
      title: "Hospitals Introduce Modern Equipment",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      desc: "Medical centers are upgrading healthcare technology rapidly.",
    },

    {
      title: "Mental Health Awareness Growing",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f",
      desc: "People are discussing stress and mental wellness openly.",
    },

    {
      title: "Healthy Sleep Improves Productivity",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      desc: "Doctors recommend at least 7 hours of sleep every night.",
    },

    {
      title: "Yoga Becoming More Popular",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      desc: "Many people are joining yoga classes for better fitness.",
    },

    {
      title: "Researchers Develop New Medicine",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      desc: "Scientists announced progress in medical research projects.",
    },

    {
      title: "Drinking Water Keeps Body Active",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
      desc: "Health experts encourage proper hydration during summer.",
    },

    {
      title: "Fitness Apps Gain Popularity",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      desc: "Users are tracking workouts using mobile fitness apps.",
    },

    {
      title: "Children Need Better Nutrition",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
      desc: "Nutritionists highlighted the importance of healthy meals.",
    },
  ];

  return (
    <>
      <header className="header">
        <h1>Latest Health News</h1>
        <p>Top health headlines from around the world</p>
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

export default Health;
