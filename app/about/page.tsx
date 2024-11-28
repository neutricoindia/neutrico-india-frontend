import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import React from "react";
const openGraphImage = {
  images: [
    "http://localhost:3000/images/logo.png",
    "http://localhost:3000/images/stock-photo-pregnancy-test-kit-female-hand-hold-positive-pregnant-test-with-silk-ribbon-on-pink-banner-2117923835-transformed.jpeg",
  ],
};

export const metadata = {
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India About Page",
    description: `
    About NEUTRICO INDIA.
    We are dedicated to the advancement of global health through its research-driven approach to developing nutritional solutions.
    Who We Are?
    We're a dedicated team leveraging science and technology to create tailored, sustainable nutritional solutions for all, empowering individuals to thrive.
    NEUTRICO INDIA is dedicated to the advancement of global health through its research-driven approach to developing nutritional solutions. With a focus on nutraceuticals, the company aims to harness scientific knowledge to create products that promote wellness and prevent various health issues.
    The company's commitment to providing formula-driven nutritional products underscores its dedication to addressing both preventative and supplementary measures for health concerns. By translating scientific research into tangible solutions,NEUTRICO INDIA strives to uplift the health of individuals worldwide.

    As a leader in the field of medical nutrition,NEUTRICO INDIA highlighting its expertise in developing products that cater to various health needs. Through its innovative approach, the company offers nutritional solutions tailored to specific demographics, in gynecological segment

    By focusing on areas such as women's health,NEUTRICO INDIA demonstrates its comprehensive approach to addressing diverse health challenges. Through its efforts, the company aims to make a meaningful impact on global health and wellness.

    Legacy Of Trust:
    NEUTRICO INDIA has established a legacy of trust, acceptance, and recommendation within the medical fraternity. Through its commitment to excellence and innovation, the company offers a diverse range of top-quality products for the healthcare industry.

    These products are widely utilized and endorsed by healthcare professionals across the country.

    Research Based methods
    The company's dedication to evidence-based medicine translates into products with strong scientific backing, enhancing their credibility and effectiveness.
    Their commitment to rigorous research ensures the highest quality standards in their products, providing safe and effective solutions for healthcare professionals.
    Impact & Thrive
    A revolution in personalized wellness: We envision a future where science-backed nutraceuticals empower individuals to live their healthiest, happiest lives. (Emphasizes both personalization and impact)
    The global standard for evidence-based wellness: Our vision is to be the leading provider of innovative, scientifically proven nutraceutical solutions that elevate global health. (Focuses on leadership and scientific rigor)
    NEUTRICO INDIA, global health, nutritional solutions, nutraceuticals, formula-driven nutrition, medical nutrition, women’s health, gynecological health, healthcare industry, evidence-based medicine, scientific research, personalized wellness, global wellness, preventative health care, supplementary nutrition, innovative nutritional solutions, sustainable nutrition, science-backed products, healthcare professionals, top-quality healthcare products, health challenges, research-driven nutrition, personalized health solutions, global health advancement, health and wellness, scientific rigor, nutraceutical innovation, leadership in health, safe healthcare solutions
    `,
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
