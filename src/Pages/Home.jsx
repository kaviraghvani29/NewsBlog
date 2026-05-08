import React from "react";
import { useNavigate } from "react-router-dom";

const General = ({ searchText }) => {
  const navigate = useNavigate();
  const news = [
    {
      title: "Global Market Updates",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      desc: "Stock markets showed positive growth this week.",
      details:
        "Global stock markets experienced positive growth this week as investors gained confidence in banking and technology sectors. Financial experts believe international trade and rising investments are helping the economy recover steadily.",
    },

    {
      title: "Sports Championship Begins",
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
      desc: "Top teams are ready for the final championship.",
      details:
        "The biggest sports championship of the year officially started with top teams preparing for exciting matches. Fans around the world are eagerly waiting for the final competition and major performances.",
    },

    {
      title: "Health Tips For Summer",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      desc: "Doctors shared useful tips to stay healthy in summer.",
      details:
        "Health experts advised people to drink enough water, avoid excessive heat, and maintain healthy eating habits during summer. Doctors also recommended regular exercise and proper sleep for better fitness.",
    },

    {
      title: "Space Mission Success",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      desc: "Scientists celebrated a successful satellite launch.",
      details:
        "Scientists successfully launched a new satellite into orbit after months of preparation. The mission is expected to improve communication systems and support future space research programs.",
    },

    {
      title: "Education System Changes",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      desc: "New learning methods are being introduced in schools.",
      details:
        "Schools are introducing modern teaching methods that include digital learning platforms and interactive classroom activities. Experts believe technology-based education will improve student engagement.",
    },

    {
      title: "Technology Conference 2026",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "Developers gathered for the biggest tech conference.",
      details:
        "Thousands of software developers and technology experts attended the international tech conference to discuss AI, cybersecurity, and future innovations in the digital world.",
    },

    {
      title: "Climate Change Awareness",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      desc: "Countries discussed solutions for climate problems.",
      details:
        "Global leaders met to discuss climate change challenges and environmental protection strategies. Experts emphasized renewable energy and reduced pollution for a sustainable future.",
    },

    {
      title: "Travel Industry Growth",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Tourism increased rapidly after holiday season.",
      details:
        "The tourism industry experienced strong growth as more travelers booked vacations during the holiday season. Airlines and hotels reported increased customer activity worldwide.",
    },

    {
      title: "Mobile Industry Trends",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      desc: "New smartphones are introducing powerful features.",
      details:
        "Smartphone companies launched advanced devices with AI-powered cameras, faster processors, and longer battery life. Consumers are showing high interest in modern mobile technology.",
    },

    {
      title: "Gaming World Updates",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      desc: "Popular gaming companies announced new releases.",
      details:
        "Gaming companies revealed upcoming game releases and major software updates during an international gaming event. Online gaming communities are excited about new features and experiences.",
    },

    {
      title: "New Electric Vehicles",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      desc: "Electric cars are becoming more affordable worldwide.",
      details:
        "Electric vehicle manufacturers are reducing prices and improving battery technology to attract more customers. Experts believe EV adoption will continue growing rapidly in coming years.",
    },
  ];

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Stay Updated With Latest News</h1>

          <p>
            Read trending news from technology, sports, business, health and
            more.
          </p>

          <button
            onClick={() => {
              window.scrollTo({
                top: 500,
                behavior: "smooth",
              });
            }}
          >
            Explore News
          </button>
        </div>
      </section>

      <section className="trending">
        <h2>Trending News</h2>

        <div className="trending-box">
          <div className="trend-card">
            <span>🔥 Trending</span>
            <h3>AI Technology Is Changing The World</h3>
          </div>

          <div className="trend-card">
            <span>⚽ Sports</span>
            <h3>Football Championship Final This Weekend</h3>
          </div>

          <div className="trend-card">
            <span>💼 Business</span>
            <h3>Stock Market Shows Positive Growth</h3>
          </div>
        </div>
      </section>
      <header className="header">
        <h1>Latest General News</h1>
        <p>Top headlines from around the world</p>
      </header>
      <div className="general-container">
        {filteredNews.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt="" />

            <div className="news-content">
              <div className="news-info">
                <span>By Admin</span>
                <span>May 9, 2026</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button
                onClick={() =>
                  navigate("/news", {
                    state: item,
                  })
                }
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default General;
