import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import Products from "@/components/products/products";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import React from "react";
const openGraphImage = {
  images: [
    "https://www.neutricoindia.in/images/logo.png",
    "https://www.neutricoindia.in/images/p1.png",
    "https://www.neutricoindia.in/images/p2.png",
    "https://www.neutricoindia.in/images/neutriova.jpeg",
  ],
};

export const metadata = {
  title:
    "Elevate Your Well-being with NEUTRICO INDIA's Science-Backed Solutions",
  alternates: {
    canonical: "https://www.neutricoindia.in/products",
  },
  description: `NEUTRICO INDIA offers a range of science-backed nutritional solutions to address diverse health needs. From prenatal care to weight management, our products are formulated to provide essential nutrients and support overall well-being. Whether you're a pregnant woman seeking optimal fetal development or an individual aiming to achieve weight loss goals, NEUTRICO INDIA has the solution for you.`,
  keywords:
    "Neutrifem, nutricoindia, nutritional solution for pregnancy, pregnancy nutrition, lactation nutrition, healthy mother, healthy baby, prenatal health, fetal health outcomes, skimmed milk powder, dietary fiber, DHA rich algal oil, evening primrose oil, pregnancy supplement, lactation supplement, nutritional supplement for mothers, Neutriva, PCOS fertility support, ovulation support, fertility supplements, women’s health supplements, Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate, L-Methylfolate, PCOS treatment, Neutrithin, meal replacement formula, weight loss supplement, obesity management, overweight treatment, natural fat burners, vitamins and minerals supplement, joint pain management, PCOS obesity solution, male infertility, female infertility, whey protein concentrate, oat fiber, inulin dietary fiber, natural weight loss supplement, physician recommended nutrition, Neutrico India, nutritional supplements, health supplements, wellness products, healthcare products, dietary supplements, health and wellness, scientific research, medical nutrition, formula-based nutrition, preventive healthcare, women's health, gynecological health, maternal health, infant health, fertility health, weight management, obesity, metabolic syndrome, diabetes, heart health, immune health, digestive health, skin health, hair health, nutritional deficiency, micronutrient deficiency, macronutrient deficiency, balanced nutrition, personalized nutrition, customized nutrition, health and fitness, lifestyle diseases, chronic diseases, preventive medicine, alternative medicine, complementary medicine, ayurvedic medicine, homeopathy, naturopathy, functional medicine, integrative medicine, holistic health, mind-body medicine, healthy lifestyle, healthy eating, healthy living, fitness, exercise, yoga, meditation, stress management, sleep, mental health, emotional health, spiritual health, sustainable health, environmental health, social health, community health, public health, global health, healthcare industry, pharmaceutical industry, nutraceutical industry, biotechnology industry, healthcare providers, healthcare professionals, doctors, nurses, dietitians, nutritionists, pharmacists, medical practitioners, health coaches, wellness coaches, health consultants, fitness trainers, yoga instructors, meditation teachers, health and wellness bloggers, health and wellness influencers, health and wellness organizations, health and wellness associations, health and wellness foundations, health and wellness NGOs, health and wellness startups, health and wellness entrepreneurs, health and wellness investors, health and wellness market, health and wellness trends, health and wellness industry, health and wellness future.",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India Products Page",
    description: `NEUTRICO INDIA offers a range of science-backed nutritional solutions to address diverse health needs. From prenatal care to weight management, our products are formulated to provide essential nutrients and support overall well-being. Whether you're a pregnant woman seeking optimal fetal development or an individual aiming to achieve weight loss goals, NEUTRICO INDIA has the solution for you.`,
    keywords:
      "Neutrifem, nutricoindia, nutritional solution for pregnancy, pregnancy nutrition, lactation nutrition, healthy mother, healthy baby, prenatal health, fetal health outcomes, skimmed milk powder, dietary fiber, DHA rich algal oil, evening primrose oil, pregnancy supplement, lactation supplement, nutritional supplement for mothers, Neutriva, PCOS fertility support, ovulation support, fertility supplements, women’s health supplements, Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate, L-Methylfolate, PCOS treatment, Neutrithin, meal replacement formula, weight loss supplement, obesity management, overweight treatment, natural fat burners, vitamins and minerals supplement, joint pain management, PCOS obesity solution, male infertility, female infertility, whey protein concentrate, oat fiber, inulin dietary fiber, natural weight loss supplement, physician recommended nutrition, Neutrico India, nutritional supplements, health supplements, wellness products, healthcare products, dietary supplements, health and wellness, scientific research, medical nutrition, formula-based nutrition, preventive healthcare, women's health, gynecological health, maternal health, infant health, fertility health, weight management, obesity, metabolic syndrome, diabetes, heart health, immune health, digestive health, skin health, hair health, nutritional deficiency, micronutrient deficiency, macronutrient deficiency, balanced nutrition, personalized nutrition, customized nutrition, health and fitness, lifestyle diseases, chronic diseases, preventive medicine, alternative medicine, complementary medicine, ayurvedic medicine, homeopathy, naturopathy, functional medicine, integrative medicine, holistic health, mind-body medicine, healthy lifestyle, healthy eating, healthy living, fitness, exercise, yoga, meditation, stress management, sleep, mental health, emotional health, spiritual health, sustainable health, environmental health, social health, community health, public health, global health, healthcare industry, pharmaceutical industry, nutraceutical industry, biotechnology industry, healthcare providers, healthcare professionals, doctors, nurses, dietitians, nutritionists, pharmacists, medical practitioners, health coaches, wellness coaches, health consultants, fitness trainers, yoga instructors, meditation teachers, health and wellness bloggers, health and wellness influencers, health and wellness organizations, health and wellness associations, health and wellness foundations, health and wellness NGOs, health and wellness startups, health and wellness entrepreneurs, health and wellness investors, health and wellness market, health and wellness trends, health and wellness industry, health and wellness future.",
  },
};
function AboutPage() {
  return (
    <div>
      <Header />
      <Nav active="products" />

      <Products />
      <FooterSection />
    </div>
  );
}

export default AboutPage;
