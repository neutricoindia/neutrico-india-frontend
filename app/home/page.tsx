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
    "http://localhost:3000/images/logo.png",
    "http://localhost:3000/images/stock-photo-young-indian-pregnant-woman-visiting-doctor-at-the-hospital-pregnancy-checkup-2184882427-transformed.jpeg",
  ],
};
export const metadata = {
  title: "Nutrico India | Home Page || Enhance Health with Neutrico India",
  description: `Enhance Health with Neutrico India: Trusted Nutritional Solutions for Global Wellness
                  Neutrico India is at the forefront of converting cutting-edge scientific knowledge into innovative nutritional solutions to improve human health. With a strong focus on quality, the company adheres to stringent quality control measures, ensuring that its products meet the highest standards of safety, efficacy, and purity. This dedication inspires trust among healthcare professionals and patients worldwide.
                  Neutrico India prioritizes research and development, staying ahead of scientific advancements to continuously improve its offerings. By collaborating with healthcare professionals, including gynecologists, dietitians, and pharmacists, the company creates products tailored to meet specific health needs.
                  Specializing in women's health, Neutrico India offers high-quality supplements designed for pregnant women, addressing their unique nutritional requirements and promoting the healthy development of their babies. Additionally, the company provides solutions for managing PCOS, aiding weight management, hormonal balance, and overall wellness.
                  With a presence across multiple countries, Neutrico India has established itself as a global leader in nutraceuticals, serving hospitals, clinics, and pharmacies. From formula-driven nutrition to preventative health care, Neutrico India is committed to advancing global health with innovative, tailored solutions.
`,
  keywords:
    "Neutrico India, nutritional solutions, nutricoindia, nutraceuticals, women's health, gynecological health, healthcare, wellness, health supplements, dietary supplements, scientific research, formula-driven nutrition, preventative healthcare, global health, quality assurance, research and development, healthcare professionals, gynecologists, dietitians, pharmacists, pregnancy nutrition, PCOS, weight management, hormonal balance, international health, hospital supplies, clinic supplies, pharmacy supplies, best nutritional supplements in India, top women's health supplements, science-backed nutritional solutions, trusted healthcare brands in India, formula-based nutritional products, preventive health supplements, supplements for PCOS management, weight loss supplements for women, pregnancy health supplements, hormonal balance supplements",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India Home Page",
    description: `Enhance Health with Neutrico India: Trusted Nutritional Solutions for Global Wellness
                  Neutrico India is at the forefront of converting cutting-edge scientific knowledge into innovative nutritional solutions to improve human health. With a strong focus on quality, the company adheres to stringent quality control measures, ensuring that its products meet the highest standards of safety, efficacy, and purity. This dedication inspires trust among healthcare professionals and patients worldwide.
                  Neutrico India prioritizes research and development, staying ahead of scientific advancements to continuously improve its offerings. By collaborating with healthcare professionals, including gynecologists, dietitians, and pharmacists, the company creates products tailored to meet specific health needs.
                  Specializing in women's health, Neutrico India offers high-quality supplements designed for pregnant women, addressing their unique nutritional requirements and promoting the healthy development of their babies. Additionally, the company provides solutions for managing PCOS, aiding weight management, hormonal balance, and overall wellness.
                  With a presence across multiple countries, Neutrico India has established itself as a global leader in nutraceuticals, serving hospitals, clinics, and pharmacies. From formula-driven nutrition to preventative health care, Neutrico India is committed to advancing global health with innovative, tailored solutions.
`,
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
