import { ExternalLink, Github, Calendar, ArrowRight, Folder } from "lucide-react";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";
import projectEcommerce from "@/assets/project-ecommerce.png";
import projectTaskManager from "@/assets/project-taskmanager.png";

const projects = [
  {
    title: "Car Rental Website",
    description: "A responsive platform for booking and managing car rentals with real-time availability, pricing, and user-friendly UI. Includes secure booking flow and modern design principles.",
    image: projectEcommerce,
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Surajsharma0804/Car_rental_website",
    date: "Oct 2024",
    featured: true,
  },
  {
    title: "Research Center Website",
    description: "Built during the Microsoft Hackathon to showcase research centers like ISRO, NASA, and SpaceX. Features interactive UI and educational content about space exploration.",
    image: projectTaskManager,
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Surajsharma0804/hackathon-project",
    date: "Sep 2024",
    featured: true,
    badge: "Hackathon",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
    image: projectEcommerce,
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Surajsharma0804",
    date: "Dec 2024",
    badge: "Latest",
  },
  {
    title: "Coming Soon",
    description: "More exciting projects in development! Currently exploring full-stack applications with Node.js, Express, MongoDB, and AI/ML integrations.",
    image: projectTaskManager,
    techStack: ["Node.js", "Express", "MongoDB", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/Surajsharma0804",
    date: "2025",
    badge: "In Progress",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-hover hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/30 backdrop-blur-sm">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg"
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </a>
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary text-foreground hover:scale-110 transition-transform shadow-lg border border-border"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary text-primary-foreground shadow-lg">
              Featured
            </span>
          )}
          {project.badge && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-accent text-accent-foreground shadow-lg">
              {project.badge}
            </span>
          )}
        </div>

        {/* Date */}
        <div className="absolute top-3 right-3">
          <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-background/90 text-foreground backdrop-blur-sm">
            <Calendar className="w-3 h-3" />
            {project.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/80 text-muted-foreground border border-border/50 group-hover:border-primary/20 group-hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              <Folder className="w-4 h-4" />
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects showcasing a bit of different skills and technologies.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150} direction="scale">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={600}>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="group border-border hover:border-primary/50 hover:bg-primary/5">
              <a href="https://github.com/Surajsharma0804" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
