import React from "react";
import Section from "../components/Section";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Section id="methodology" title="Methodology">
          <p>Describe your unique approach and methodology here.</p>
        </Section>
        <Section id="customers" title="Customers">
          <p>Highlight key customers and case studies.</p>
        </Section>
        <Section id="partners" title="Partners">
          <p>Describe your strategic partners.</p>
        </Section>
        <Section id="why-us" title="Why Us">
          <p>Explain why clients should choose your consulting company.</p>
        </Section>
        <Section id="about-us" title="About Us">
          <p>Share your company’s mission, vision, and story.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
