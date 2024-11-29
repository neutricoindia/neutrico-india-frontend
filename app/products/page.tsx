import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import Products from "@/components/products/products";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import React from "react";
const openGraphImage = {
  images: [
    "http://localhost:3000/images/logo.png",
    "http://localhost:3000/images/p1.png",
    "http://localhost:3000/images/p2.png",
    "http://localhost:3000/images/neutriova.jpeg",
  ],
};

export const metadata = {
  title:
    "Nutrico India | Products Page || lactation nutrition || pregnancy supplements || PCOS fertility support",
  description: `NEUTRIFEM: is a scientifically formulated well balanced nutritional solution for pregnant women for nourished health throughout pregnancy and lactation and improved fetal health outcomes. NEUTRIFEM is a evened nutritional supplement, providing comprehensive nourishment for healthy mother and healthy baby
                  Pregnancy
                  Lactation
                  Ingredients: Skimmed Milk Powder, Maltodextrin, Soy Protein Isolate, Inulin (Dietary fibre), Oleic Sunflower Oil Powder, Evening Primrose Oil Powder, Minerals, DHA rich Algal Oil Powder, Vitamins, Sucralose, Natural Cocoa Powder.

                  Direction to use:: Add 2 tablespoons (30g) twice a day in 100ml of lukewarm milk to make a paste. Further add lukewarm milk or water to reconstitute the volume upto 240ml or as directed by your Physician/Nutritionist.
                  NUTRIOVA: Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate & L-Methylfolate Tablets

                  Ovulation and fertility in women with PCOS.
                  Support fertility in women with PCOS.
                  Composition:

                  Berberine Hydrochloride 500mg
                  Myo Inositol 550mg
                  D Chiro Inositol 13.8mg
                  Melatonin 1.5mg
                  Vitamin D3 400IU
                  Chromium Picolinate 50mcg
                  L-Methylfolate 0.05mg
                  Dosage: As directed by Physician

                  N.B. Store in a cool, dry and dark place.

                  NEUTRITHIN: is a natural and comprehensive meal replacement formula for effective and long term weight loss. Provides 3 natural fat burners and 27 essential vitamins and minerals.

                  Obesity
                  Overweight
                  Obesity related complications, such as PCOS (Polycystic Ovary Syndrome), Joint Pain, Male & Female Infertility
                  Ingredients: Skimmed Milk Powder, Maltodextrin, Whey Protein Concentrate, Oat Fiber, Inulin (Dietary Fibre), Corn Syrup Solids, Soy Protein Isolate, nature identical vanilla flavour, Oleic Sunflower Oil Powder, Minerals, Cellulose Gel Powder, Hydroxycitric Acid, Vitamins, L-Carnitine, Xanthan Gum, Carrageenan and Sucralose.

                  Direction to use:: Add two scoops (40g) once a day in 100ml of skimmed milk to make a paste. Further add skimmed milk to reconstitute the volume upto 240ml or as directed by your Physician/Nutritionist.
                  NEUTRIFEM, nutritional solution for pregnancy, pregnancy nutrition, lactation nutrition, healthy mother, healthy baby, prenatal health, fetal health outcomes, skimmed milk powder, dietary fiber, DHA rich algal oil, evening primrose oil, pregnancy supplement, lactation supplement, nutritional supplement for mothers, NEUTRIOVA, PCOS fertility support, ovulation support, fertility supplements, women’s health supplements, Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate, L-Methylfolate, PCOS treatment, NEUTRITHIN, meal replacement formula, weight loss supplement, obesity management, overweight treatment, natural fat burners, vitamins and minerals supplement, joint pain management, PCOS obesity solution, male infertility, female infertility, whey protein concentrate, oat fiber, inulin dietary fiber, natural weight loss supplement, physician recommended nutrition.
                `,
  keywords:
    "Neutrifem, nutricoindia, nutritional solution for pregnancy, pregnancy nutrition, lactation nutrition, healthy mother, healthy baby, prenatal health, fetal health outcomes, skimmed milk powder, dietary fiber, DHA rich algal oil, evening primrose oil, pregnancy supplement, lactation supplement, nutritional supplement for mothers, Neutriva, PCOS fertility support, ovulation support, fertility supplements, women’s health supplements, Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate, L-Methylfolate, PCOS treatment, Neutrithin, meal replacement formula, weight loss supplement, obesity management, overweight treatment, natural fat burners, vitamins and minerals supplement, joint pain management, PCOS obesity solution, male infertility, female infertility, whey protein concentrate, oat fiber, inulin dietary fiber, natural weight loss supplement, physician recommended nutrition, Neutrico India, nutritional supplements, health supplements, wellness products, healthcare products, dietary supplements, health and wellness, scientific research, medical nutrition, formula-based nutrition, preventive healthcare, women's health, gynecological health, maternal health, infant health, fertility health, weight management, obesity, metabolic syndrome, diabetes, heart health, immune health, digestive health, skin health, hair health, nutritional deficiency, micronutrient deficiency, macronutrient deficiency, balanced nutrition, personalized nutrition, customized nutrition, health and fitness, lifestyle diseases, chronic diseases, preventive medicine, alternative medicine, complementary medicine, ayurvedic medicine, homeopathy, naturopathy, functional medicine, integrative medicine, holistic health, mind-body medicine, healthy lifestyle, healthy eating, healthy living, fitness, exercise, yoga, meditation, stress management, sleep, mental health, emotional health, spiritual health, sustainable health, environmental health, social health, community health, public health, global health, healthcare industry, pharmaceutical industry, nutraceutical industry, biotechnology industry, healthcare providers, healthcare professionals, doctors, nurses, dietitians, nutritionists, pharmacists, medical practitioners, health coaches, wellness coaches, health consultants, fitness trainers, yoga instructors, meditation teachers, health and wellness bloggers, health and wellness influencers, health and wellness organizations, health and wellness associations, health and wellness foundations, health and wellness NGOs, health and wellness startups, health and wellness entrepreneurs, health and wellness investors, health and wellness market, health and wellness trends, health and wellness industry, health and wellness future.",
  openGraph: {
    ...openGraphImage,
    title: "Nutrico India Products Page",
    description: `NEUTRIFEM: is a scientifically formulated well balanced nutritional solution for pregnant women for nourished health throughout pregnancy and lactation and improved fetal health outcomes. NEUTRIFEM is a evened nutritional supplement, providing comprehensive nourishment for healthy mother and healthy baby
                  Pregnancy
                  Lactation
                  Ingredients: Skimmed Milk Powder, Maltodextrin, Soy Protein Isolate, Inulin (Dietary fibre), Oleic Sunflower Oil Powder, Evening Primrose Oil Powder, Minerals, DHA rich Algal Oil Powder, Vitamins, Sucralose, Natural Cocoa Powder.

                  Direction to use:: Add 2 tablespoons (30g) twice a day in 100ml of lukewarm milk to make a paste. Further add lukewarm milk or water to reconstitute the volume upto 240ml or as directed by your Physician/Nutritionist.
                  NUTRIOVA: Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate & L-Methylfolate Tablets

                  Ovulation and fertility in women with PCOS.
                  Support fertility in women with PCOS.
                  Composition:

                  Berberine Hydrochloride 500mg
                  Myo Inositol 550mg
                  D Chiro Inositol 13.8mg
                  Melatonin 1.5mg
                  Vitamin D3 400IU
                  Chromium Picolinate 50mcg
                  L-Methylfolate 0.05mg
                  Dosage: As directed by Physician

                  N.B. Store in a cool, dry and dark place.

                  NEUTRITHIN: is a natural and comprehensive meal replacement formula for effective and long term weight loss. Provides 3 natural fat burners and 27 essential vitamins and minerals.

                  Obesity
                  Overweight
                  Obesity related complications, such as PCOS (Polycystic Ovary Syndrome), Joint Pain, Male & Female Infertility
                  Ingredients: Skimmed Milk Powder, Maltodextrin, Whey Protein Concentrate, Oat Fiber, Inulin (Dietary Fibre), Corn Syrup Solids, Soy Protein Isolate, nature identical vanilla flavour, Oleic Sunflower Oil Powder, Minerals, Cellulose Gel Powder, Hydroxycitric Acid, Vitamins, L-Carnitine, Xanthan Gum, Carrageenan and Sucralose.

                  Direction to use:: Add two scoops (40g) once a day in 100ml of skimmed milk to make a paste. Further add skimmed milk to reconstitute the volume upto 240ml or as directed by your Physician/Nutritionist.
                  NEUTRIFEM, nutritional solution for pregnancy, pregnancy nutrition, lactation nutrition, healthy mother, healthy baby, prenatal health, fetal health outcomes, skimmed milk powder, dietary fiber, DHA rich algal oil, evening primrose oil, pregnancy supplement, lactation supplement, nutritional supplement for mothers, NEUTRIOVA, PCOS fertility support, ovulation support, fertility supplements, women’s health supplements, Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin, Vitamin D3, Chromium Picolinate, L-Methylfolate, PCOS treatment, NEUTRITHIN, meal replacement formula, weight loss supplement, obesity management, overweight treatment, natural fat burners, vitamins and minerals supplement, joint pain management, PCOS obesity solution, male infertility, female infertility, whey protein concentrate, oat fiber, inulin dietary fiber, natural weight loss supplement, physician recommended nutrition.
                  `,
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
