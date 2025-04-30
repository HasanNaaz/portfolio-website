import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    title: 'Hospital Management Website',
    description: 'A web application designed to streamline hospital operations, including patient records, appointments, and staff management.',
    imageUrl: 'https://picsum.photos/seed/hospital/600/400', // Placeholder
    tags: ['Web Development', 'Database Management', 'React', 'Node.js'], // Example tags
    liveLink: '#', // Replace with actual link if available
    githubLink: '#', // Replace with actual link
  },
  {
    title: 'Donation Management Web App',
    description: 'An application facilitating donation tracking, donor communication, and campaign management for non-profit organizations.',
    imageUrl: 'https://picsum.photos/seed/donation/600/400', // Placeholder
    tags: ['Web App', 'React', 'Firebase', 'UI/UX'], // Example tags
    // liveLink: '#', // Optional live link
    githubLink: '#', // Replace with actual link
  },
  {
    title: 'Car Company Website',
    description: 'A modern website showcasing a car company\'s inventory, features, and contact information. Focused on clean UI and responsiveness.',
    imageUrl: 'https://picsum.photos/seed/car/600/400', // Placeholder
    tags: ['Frontend', 'Next.js', 'Tailwind CSS', 'Responsive Design'], // Example tags
    liveLink: '#', // Replace with actual link if available
    githubLink: '#', // Replace with actual link
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto py-16 md:py-24 px-4 md:px-6 bg-secondary rounded-lg my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col bg-card shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground pt-1">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3 border-t pt-4 mt-auto">
              {project.githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveLink && (
                 <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
