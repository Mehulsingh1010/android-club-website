import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
import ContactUs from "./pages/Contact-us/ContactUs";
import EventDetails from "./components/EventDetails/EventDetails";
import Blogs from "./pages/Blogs/Blogs";
import BlogreadPage from "./pages/Blogs/Read more/Blogreadpage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogreadPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
