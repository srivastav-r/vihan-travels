import React from "react";
import {}

 export const Home = () =>{
    return (
        <div>
          {/* Header with tab selection */}
          <Header setActiveTab={setActiveTab} />
          <main>
            {/* Dynamic Rendering Based on Active Tab */}
            {/* Dynamic Rendering Based on Active Tab */}
    {/* Dynamic Rendering Based on Active Tab */}
    {activeTab === "home" && (
      <section id="home">
        <h2>Welcome to Vihana Travels</h2>
        <p>Welcome to Vihana Travels, your ideal companion for unforgettable road trips. We offer comfortable and safe car journeys, whether you're exploring scenic routes or embarking on a new adventure. Our experienced drivers and well-maintained vehicles ensure a smooth and enjoyable travel experience. Let us take the wheel and make your travels stress-free and memorable!</p>
    
        <div className="image-gallery">
          <img src="my-react-app\public\images\img.1.jpg" />
          <img src="C:\react project\my-react-app\public\images\img.2.jpg"/>
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
          </main>
          <Footer />
        </div>
      );
}
