import React, { useState } from "react";
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Service from "../Componets/Service";
import ContactForm from "../Componets/ContactForm";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <Header setActiveTab={setActiveTab} />
        {activeTab === "home" && (
          <section id="home">
            <h2>Welcome to Vihana Travels</h2>
            <p>
              Welcome to Vihana Travels, your ideal companion for unforgettable road trips. 
              We offer comfortable and safe car journeys, whether you're exploring scenic 
              routes or embarking on a new adventure. Our experienced drivers and well-maintained 
              vehicles ensure a smooth and enjoyable travel experience. Let us take the wheel 
              and make your travels stress-free and memorable!
            </p>

            <div className="image-gallery">
              <img src="Images\backside-car-img.jpeg" alt="Gallery Image 1" style={{width:'500px',height:'500px'}} />
              <img src="/images/img.2.jpg" alt="Gallery Image 2" />
            </div>
          </section>
        )}

        {activeTab === "services" && (
          <section id="services">
            <h2>Our Services</h2>
            <Service
              title="Tour Packages"
              description="Customized tour packages to suit your needs."
            />
            <Service
              title="Travel Assistance"
              description="24/7 customer support to guide your journey."
            />
          </section>
        )}

        {activeTab === "about" && (
          <section id="about">
            <h2>About Us</h2>
            <p>
              Reliable and comfortable travel services tailored to your needs.
            </p>
            <p>
              We prioritize punctuality, safety, and customer satisfaction,
              making us the preferred choice for individuals and businesses.
            </p>
          </section>
        )}

        {activeTab === "contact" && (
          <section id="contact">
            <h2>Contact Us</h2>
            <ContactForm />
          </section>
        )}
      <Footer />
    </div>
  );
};

export default Home;
