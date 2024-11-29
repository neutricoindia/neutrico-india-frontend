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
    "https://www.neutricoindia.in/images/logo.png",
    "https://www.neutricoindia.in/images/p1.png",
    "https://www.neutricoindia.in/images/p2.png",
    "https://www.neutricoindia.in/images/neutriova.jpeg",
  ],
};

export const metadata = {
  title: "NEUTRICO INDIA: Leading the Way in Nutritional Science and Wellness",
  alternates: {
    canonical: "https://www.neutricoindia.in",
  },
  description: `NEUTRICO INDIA is a global leader in nutritional science, dedicated to improving global health through innovative, research-driven solutions. We offer a wide range of science-backed products, including nutraceuticals and medical nutrition, designed to address specific health needs and empower individuals to live healthier lives. Our commitment to quality, efficacy, and personalized nutrition sets us apart as a trusted partner in your wellness journey.`,
  keywords:
    "NEUTRICO INDIA, nutricoindia, nutritional solutions, nutraceuticals, medical nutrition, women's health, gynecological health, healthcare industry, evidence-based medicine, scientific research, personalized wellness, global wellness, preventative healthcare, supplementary nutrition, innovative nutritional solutions, sustainable nutrition, science-backed products, healthcare professionals, top-quality healthcare products, health challenges, research-driven nutrition, personalized health solutions, global health advancement, health and wellness, scientific rigor, nutraceutical innovation, leadership in health, safe healthcare solutions",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India",
    description: `NEUTRICO INDIA is a global leader in nutritional science, dedicated to improving global health through innovative, research-driven solutions. We offer a wide range of science-backed products, including nutraceuticals and medical nutrition, designed to address specific health needs and empower individuals to live healthier lives. Our commitment to quality, efficacy, and personalized nutrition sets us apart as a trusted partner in your wellness journey.`,
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
