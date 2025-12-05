import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechnicalSkills from "@/components/TechnicalSkills";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Suraj Kumar | Full Stack Developer & AI/ML Enthusiast</title>
        <meta name="description" content="Suraj Kumar - Aspiring Full Stack Developer & AI/ML Enthusiast. B.Tech CSE student at LPU skilled in JavaScript, Python, React, Spring Boot, and modern web technologies. View my projects, certifications, and achievements." />
        <meta name="keywords" content="Suraj Kumar, Full Stack Developer, Web Developer, AI ML Enthusiast, Portfolio, JavaScript, Python, React, Spring Boot, B.Tech CSE, LPU, Bihar India, Software Engineer" />
        <meta name="author" content="Suraj Kumar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://surajkumar.site" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://surajkumar.site" />
        <meta property="og:title" content="Suraj Kumar | Full Stack Developer & AI/ML Enthusiast" />
        <meta property="og:description" content="Aspiring Full Stack Developer skilled in JavaScript, Python, React, and AI/ML. B.Tech CSE student at LPU with hands-on experience from hackathons and industry simulations." />
        <meta property="og:image" content="https://surajkumar.site/og-image.png" />
        <meta property="og:site_name" content="Suraj Kumar Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://surajkumar.site" />
        <meta name="twitter:title" content="Suraj Kumar | Full Stack Developer & AI/ML Enthusiast" />
        <meta name="twitter:description" content="Aspiring Full Stack Developer skilled in JavaScript, Python, React, and AI/ML. B.Tech CSE student at LPU." />
        <meta name="twitter:image" content="https://surajkumar.site/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#1db88e" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <TechnicalSkills />
          <ProjectsSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
