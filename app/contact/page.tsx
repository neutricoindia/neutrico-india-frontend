import ContactUs from "@/components/ContactUs/ContactUs";
import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import React from "react";
const openGraphImage = {
  images: [
    "http://localhost:3000/images/logo.png",
    "http://localhost:3000/images/firmbee-com-SpVHcbuKi6E-unsplash.jpg",
  ],
};

export const metadata = {
  title: "Nutrico India | Get In Touch with Us",
  description: `
    Get In Touch with NEUTRICO INDIA.
    We're always excited to hear from you! Questions, feedback, or greetings welcome (contact info below).
    Contact Us:
    NEUTRICO INDIA
    A321, Master Mind 4, Royal Palms,
    Goregaon (East),
    Mumbai,
    Maharashtra- 400065
    `,
  keywords:
    "Neutrico India contact, nutricoindia, Neutrico India customer service, Neutrico India support, Neutrico India office address, Neutrico India headquarters, Contact Neutrico India, Neutrico India support team, Neutrico India help center, Neutrico India Mumbai, Neutrico India Maharashtra, Neutrico India Kolkata, Neutrico India WestBengal",

  openGraph: {
    ...openGraphImage,
    title: "Nutrico India Contact Page",
    description: `
    Get In Touch with NEUTRICO INDIA.
    We're always excited to hear from you! Questions, feedback, or greetings welcome (contact info below).
    Contact Us:
    NEUTRICO INDIA
    A321, Master Mind 4, Royal Palms,
    Goregaon (East),
    Mumbai,
    Maharashtra- 400065
    `,
    keywords:
      "Neutrico India contact, nutricoindia, Neutrico India customer service, Neutrico India support, Neutrico India office address, Neutrico India headquarters, Contact Neutrico India, Neutrico India support team, Neutrico India help center, Neutrico India Mumbai, Neutrico India Maharashtra, Neutrico India Kolkata, Neutrico India WestBengal",
  },
};
function ContactPage() {
  return (
    <div>
      <Header />
      <Nav active="contact" />
      <OtherPagesHero
        bgURL={`images/firmbee-com-SpVHcbuKi6E-unsplash.jpg`}
        body={`We're always excited to hear from you!  Questions, feedback, or greetings welcome (contact info below).`}
        title={`Get In Touch with NEUTRICO INDIA.`}
      />
      <ContactUs />
      <FooterSection />
    </div>
  );
}

export default ContactPage;
