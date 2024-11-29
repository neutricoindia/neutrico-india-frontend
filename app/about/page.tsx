import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import React from "react";
const openGraphImage = {
  images: [
    "https://www.neutricoindia.in/images/logo.png",
    "https://www.neutricoindia.in/images/stock-photo-pregnancy-test-kit-female-hand-hold-positive-pregnant-test-with-silk-ribbon-on-pink-banner-2117923835-transformed.jpeg",
  ],
};

export const metadata = {
  title:
    "Advancing Global Health: Explore Neutrico India's Innovative Solutions",
  alternates: {
    canonical: "https://www.neutricoindia.in/about",
  },
  description: `NEUTRICO INDIA is a leading provider of science-backed nutritional solutions dedicated to improving global health. By harnessing the power of research and innovation, we offer a range of products, including nutraceuticals and medical nutrition, tailored to specific health needs. Our commitment to quality and efficacy ensures that our solutions empower individuals to live healthier, happier lives.`,
  keywords:
    "NEUTRICO INDIA, nutricoindia, nutritional solutions, nutraceuticals, medical nutrition, women's health, gynecological health, healthcare industry, evidence-based medicine, scientific research, personalized wellness, global wellness, preventative healthcare, supplementary nutrition, innovative nutritional solutions, sustainable nutrition, science-backed products, healthcare professionals, top-quality healthcare products, health challenges, research-driven nutrition, personalized health solutions, global health advancement, health and wellness, scientific rigor, nutraceutical innovation, leadership in health, safe healthcare solutions",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India About Page",
    description: `NEUTRICO INDIA is a leading provider of science-backed nutritional solutions dedicated to improving global health. By harnessing the power of research and innovation, we offer a range of products, including nutraceuticals and medical nutrition, tailored to specific health needs. Our commitment to quality and efficacy ensures that our solutions empower individuals to live healthier, happier lives.`,
    keywords:
      "NEUTRICO INDIA, nutricoindia, nutritional solutions, nutraceuticals, medical nutrition, women's health, gynecological health, healthcare industry, evidence-based medicine, scientific research, personalized wellness, global wellness, preventative healthcare, supplementary nutrition, innovative nutritional solutions, sustainable nutrition, science-backed products, healthcare professionals, top-quality healthcare products, health challenges, research-driven nutrition, personalized health solutions, global health advancement, health and wellness, scientific rigor, nutraceutical innovation, leadership in health, safe healthcare solutions",
  },
};
function AboutPage() {
  return (
    <div>
      <Header />
      <Nav active="about" />
      <OtherPagesHero
        bgURL={`images/stock-photo-pregnancy-test-kit-female-hand-hold-positive-pregnant-test-with-silk-ribbon-on-pink-banner-2117923835-transformed.jpeg`}
        body={`We are dedicated to the advancement of global health through its
              research-driven approach to developing nutritional solutions.`}
        title={`About NEUTRICO INDIA.`}
      />
      <WhoWeAre />
      <FooterSection />
    </div>
  );
}

export default AboutPage;
