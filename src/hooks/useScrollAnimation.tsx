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
        <title>Suraj Kumar | Full Stack Developer && AI/ML Enthusiast Portfolio</title>
        <meta name="description" content="Suraj Kumar - Aspiring Full Stack Developer & B.Tech CSE student at Lovely Professional University. Skilled in JavaScript, Python, React, and AI/ML. View my projects and certifications." />
        <meta name="keywords" content="Suraj Kumar, Full Stack Developer, Web Developer, Portfolio, JavaScript, Python, React, B.Tech CSE, LPU, AI ML" />
        <link rel="canonical" href="https://surajkumar.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Suraj Kumar | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Aspiring Full Stack Developer skilled in JavaScript, Python, and modern web technologies." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suraj Kumar | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Aspiring Full Stack Developer skilled in JavaScript, Python, and modern web technologies." />
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
