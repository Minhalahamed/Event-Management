// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import  WelcomeModal from "./components/WelcomeModal.jsx"
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Events from "./pages/Events";

// import Gallery from "./pages/Gallery";
// import Feedback from "./pages/Feedback";
// import Contact from "./pages/Contact";
// import Register  from "./components/Register.jsx"

// import ScrollToTop from "./components/scroltotop.jsx";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
    
//       <ScrollToTop />
//       <Navbar />
// <WelcomeModal/>
      
//       <main className="flex-grow mt-16"> 
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

      
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import EventDetails from "./pages/EventDetails";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import EventCalendar from "./pages/EventCalender.jsx";
import Gallery from "./pages/Gallery";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Register from "./components/Register.jsx";

import ScrollToTop from "./components/scroltotop.jsx";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      
      
      
      <main className="flex-grow mt-16"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/calendar" element={<EventCalendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;