import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Business from "./Pages/Business";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";
import Health from "./Pages/Health";
import NewsDetails from "./pages/NewsDetails";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <BrowserRouter>
      <Navbar setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home searchText={searchText} />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/health" element={<Health />} />
        <Route path="/news" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// const App = () => {
//   const [searchText, setSearchText] = useState("");

//   return (
//     <BrowserRouter>
//       <Navbar setSearchText={setSearchText} />

//       <Routes>
//         <Route
//           path="/"
//           element={<General searchText={searchText} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
