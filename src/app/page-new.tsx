"use client";
import { useState } from "react";

// Import all section components
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import PrayerTimes from "../components/sections/PrayerTimes";
import Events from "../components/sections/Events";
import News from "../components/sections/News";
import Donation from "../components/sections/Donation";
import Gallery from "../components/sections/Gallery";
import Committee from "../components/sections/Committee";
import Footer from "../components/sections/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <PrayerTimes />
      <Events />
      <News />
      <Donation />
      <Gallery />
      <Committee />
      <Footer />
    </div>
  );
}
