import React from "react";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import heroOneImg from "images/hero1.png";
import heroTwoImg from "images/hero2.png";
import heroThreeImg from "images/hero3.png";
import Navbar from "./components/Navbar";

function App() {
  let heroOne = {
    title: "Grow your subscription business",
    text: "Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.",
    src: heroOneImg,
    buttonText: "Get Started",
    position: true,
  };
  let heroTwo = {
    title: "Subscription index",
    text: "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.",
    src: heroTwoImg,
    buttonText: "Learn More",
    position: false,
  };
  let heroThree = {
    title: "In-depth metrics",
    text: "Accurate, real-time reporting at your fingertips. Getting data has never been easier.",
    src: heroThreeImg,
    buttonText: "Learn More",
    position: true,
  };
  return (
    <div className="App">
      <Navbar />
      <Hero info={heroOne} />
      <Brands />
      <Hero info={heroTwo} />
      <Hero info={heroThree} />
    </div>
  );
}

export default App;
