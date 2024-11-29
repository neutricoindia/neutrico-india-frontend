import type { Metadata } from "next";
import "./globals.css";
import local from "next/font/local";

// const deacon = local({
//   src: [
//     {
//       path: "../../public/webfonts/fa-brands-400.woff",
//       weight: "400",
//     },
//     {
//       path: "../../public/webfonts/fa-regular-400.eot",
//       weight: "400",
//     },
//     {
//       path: "../../public/webfonts/fa-solid-900.eot",
//       weight: "900",
//     },
//   ],
//   variable: "--fa",
// });

const openGraphImage = {
  images: [
    "http://localhost:3000/images/logo.png",
    "http://localhost:3000/images/p1.png",
    "http://localhost:3000/images/p2.png",
    "http://localhost:3000/images/neutriova.jpeg",
  ],
};

export const metadata = {
  title: "Nutrico India",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India",
    description: `A Commitment to Health and Wellness
                NEUTRICO INDIA is a pioneer in the field of nutritional science, dedicated to improving global health through innovative, research-driven solutions. Our team of experts harnesses the power of science and technology to develop tailored, sustainable nutritional products that empower individuals to thrive.
                Our Mission:
                We are committed to:
                Scientific Innovation: Continuously pushing the boundaries of nutritional research to deliver cutting-edge solutions.
                Personalized Wellness: Creating customized nutritional plans to address specific health needs and goals.
                Global Impact: Making a positive difference in the lives of people worldwide by promoting optimal health and well-being.
                Our Focus Areas
                Nutraceuticals: Harnessing the power of nature to develop effective dietary supplements.
                Medical Nutrition: Providing specialized nutritional solutions for individuals with specific health conditions.
                Women's Health: Empowering women with targeted nutritional support.
                Why Choose NEUTRICO INDIA?
                Research-Driven Approach: Our products are backed by rigorous scientific research and clinical trials.
                Quality Assurance: We adhere to the highest quality standards in manufacturing and testing.
                Expert Formulation: Our team of experts develops innovative formulas to optimize nutrient absorption and efficacy.
                Personalized Solutions: We offer tailored nutritional advice and product recommendations to meet your unique needs.
                Our Vision
                To be the global leader in evidence-based nutrition, transforming lives through science-backed solutions.
                Join us in our mission to create a healthier future.`,
    keywords:
      "NEUTRICO INDIA, nutricoindia, nutritional solutions, nutraceuticals, medical nutrition, women's health, gynecological health, healthcare industry, evidence-based medicine, scientific research, personalized wellness, global wellness, preventative healthcare, supplementary nutrition, innovative nutritional solutions, sustainable nutrition, science-backed products, healthcare professionals, top-quality healthcare products, health challenges, research-driven nutrition, personalized health solutions, global health advancement, health and wellness, scientific rigor, nutraceutical innovation, leadership in health, safe healthcare solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="keywords"
        content="Neutrico India, global health, nutritional solutions, nutraceuticals, formula-driven nutrition, medical nutrition, women's health, gynecological health, healthcare industry, evidence-based medicine, scientific research, personalized wellness, global wellness, preventative health care, supplementary nutrition, innovative nutritional solutions, sustainable nutrition, science-backed products, healthcare professionals, top-quality healthcare products, health challenges, research-driven nutrition, personalized health solutions, global health advancement, health and wellness, scientific rigor, nutraceutical innovation, leadership in health, safe healthcare solutions"
      />
      <meta property="og:title" content="Neutrico India" />
      <meta
        property="og:description"
        content={`NEUTRICO INDIA is dedicated to the advancement of global health through its research-driven approach to developing nutritional solutions. With a focus on nutraceuticals, the company aims to harness scientific knowledge to create products that promote wellness and prevent various health issues. The company's commitment to providing formula-driven nutritional products underscores its dedication to addressing both preventative and supplementary measures for health concerns. By translating scientific research into tangible solutions, NEUTRICO INDIA strives to uplift the health of individuals worldwide.
As a leader in the field of medical nutrition, NEUTRICO INDIA highlighting its expertise in developing products that cater to various health needs. Through its innovative approach, the company offers nutritional solutions tailored to specific demographics, in gynecological segment By focusing on areas such as women's health, NEUTRICO INDIA demonstrates its comprehensive approach to addressing diverse health challenges. Through its efforts, the company aims to make a meaningful impact on global health and wellness.`}
      />
      <meta property="og:image" content="/images/logo.png" />
      <body id="top">{children}</body>
    </html>
  );
}
