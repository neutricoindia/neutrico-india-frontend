import Evidence from "@/components/Evidence/Evidence";
import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MileStones from "@/components/MileStones/MileStones";
import Nav from "@/components/Nav/Nav";
import StoriesSection from "@/components/StoriesSection/StoriesSection";
import VideoDescription from "@/components/VideoDescription/VideoDescription";
import React from "react";
const openGraphImage = {
  images: [
    "https://www.neutricoindia.in/images/logo.png",
    "https://www.neutricoindia.in/images/stock-photo-young-indian-pregnant-woman-visiting-doctor-at-the-hospital-pregnancy-checkup-2184882427-transformed.jpeg",
  ],
};
export const metadata = {
  title: "Elevate Your Well-being: Discover Neutrico India",
  alternates: {
    canonical: "https://www.neutricoindia.in/home",
  },
  description: `Elevate your well-being with NEUTRICO INDIA, a global leader in science-backed nutritional solutions. Our innovative products, from pregnancy supplements to weight management solutions, are designed to address specific health needs. Backed by rigorous research and stringent quality standards, NEUTRICO INDIA is committed to providing safe, effective, and sustainable products that empower individuals to live healthier, happier lives.`,
  keywords:
    "Neutrico India, nutritional solutions, nutricoindia, nutraceuticals, women's health, gynecological health, healthcare, wellness, health supplements, dietary supplements, scientific research, formula-driven nutrition, preventative healthcare, global health, quality assurance, research and development, healthcare professionals, gynecologists, dietitians, pharmacists, pregnancy nutrition, PCOS, weight management, hormonal balance, international health, hospital supplies, clinic supplies, pharmacy supplies, best nutritional supplements in India, top women's health supplements, science-backed nutritional solutions, trusted healthcare brands in India, formula-based nutritional products, preventive health supplements, supplements for PCOS management, weight loss supplements for women, pregnancy health supplements, hormonal balance supplements",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India Home Page",
    description: `Elevate your well-being with NEUTRICO INDIA, a global leader in science-backed nutritional solutions. Our innovative products, from pregnancy supplements to weight management solutions, are designed to address specific health needs. Backed by rigorous research and stringent quality standards, NEUTRICO INDIA is committed to providing safe, effective, and sustainable products that empower individuals to live healthier, happier lives.`,
    keywords:
      "Neutrico India, nutritional solutions, nutricoindia, nutraceuticals, women's health, gynecological health, healthcare, wellness, health supplements, dietary supplements, scientific research, formula-driven nutrition, preventative healthcare, global health, quality assurance, research and development, healthcare professionals, gynecologists, dietitians, pharmacists, pregnancy nutrition, PCOS, weight management, hormonal balance, international health, hospital supplies, clinic supplies, pharmacy supplies, best nutritional supplements in India, top women's health supplements, science-backed nutritional solutions, trusted healthcare brands in India, formula-based nutritional products, preventive health supplements, supplements for PCOS management, weight loss supplements for women, pregnancy health supplements, hormonal balance supplements",
  },
};
function HomePage() {
  return (
    <div>
      <Header />
      <Nav active="home" />
      <Hero />
      <VideoDescription />
      <MileStones />
      <Evidence />
      <StoriesSection />
      <FooterSection />
    </div>
  );
}

export default HomePage;
