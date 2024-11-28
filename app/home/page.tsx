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
  title: "Nutrico India | Home Page",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India Home Page",
    description: `Converting scientific knowledge into nutritional solutions to enhance the health of humanity. NEUTRICO INDIA maintains stringent quality control measures throughout the manufacturing process to ensure that its products meet the highest standards of safety, efficacy, and purity. This commitment to quality assurance instills confidence among healthcare professionals and patients alike. The company invests significantly in research and development to continuously improve and innovate its product offerings. By staying at the forefront of scientific advancements, NEUTRICO INDIA is able to develop cutting-edge solutions that address the evolving needs of the healthcare industry. NEUTRICO INDIA actively collaborates with healthcare professionals, including gynecologist, nurses, dietitians, and pharmacists, to understand their needs and preferences. By fostering partnerships with the medical community, the company ensures that its products are tailored to meet the specific requirements of healthcare professionals and their patients. With a presence all over the countries , NEUTRICO INDIA has established itself as a leading provider of healthcare solutions on a large scale. Its products are widely distributed and recommended by healthcare professionals in diverse healthcare settings, including hospitals, clinics, and pharmacies.
    Neutrico India is a trusted company known for providing nutritional products that are specifically formulated to support the health and well-being of pregnant women. These nutritional products are carefully designed to meet the unique dietary needs of expectant mothers and to support the healthy development of the baby.Neutrico India, as a trusted provider of nutritional products, likely offers a range of high-quality supplements specifically tailored for pregnant women. It's important for pregnant women to consult with their healthcare providers before starting any new supplements to ensure that they are safe and appropriate for their individual needs. Additionally, healthcare providers may recommend specific products based on the woman's nutritional status, medical history, and dietary intake.
    While there isn't specific information available about products from Neutrico India, here are some general benefits that nutritional products designed for PCOS (Polycystic Ovary Syndrome) may offer:Weight Management: PCOS is often associated with weight gain and obesity. Nutritional products formulated for PCOS may support weight management efforts by promoting satiety, boosting metabolism, and encouraging fat loss while preserving lean mass.function. It's important to note that individual responses to nutritional products may vary, and it's advisable to consult with a healthcare professional before starting any new supplements, especially if you have a medical condition like PCOS. Additionally, personalized recommendations based on your specific health needs and goals can help optimize the benefits of nutritional products for PCOS management.    
    Polycystic Ovary Syndrome, NEUTRICO INDIA, global health solutions, nutritional products, nutraceuticals, formula-driven nutrition, medical nutrition, health and wellness, research-driven nutrition, gynecological health, women's health products, innovative health solutions, preventative health care, supplementary nutrition, health challenges solutions, global health advancement, tailored nutritional solutions
      `,
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
