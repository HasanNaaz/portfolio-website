import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, BrainCircuit, Network, Database, Settings } from 'lucide-react'; // Using relevant icons

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code className="h-5 w-5 text-accent" />,
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'], // Add/Remove skills
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Settings className="h-5 w-5 text-accent" />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask/Django (mention if applicable)', 'TensorFlow/PyTorch'], // Add/Remove skills
  },
  {
    category: 'Databases',
    icon: <Database className="h-5 w-5 text-accent" />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'], // Add/Remove skills
  },
   {
    category: 'Specializations',
    icon: <BrainCircuit className="h-5 w-5 text-accent" />,
    skills: ['Deep Learning', 'Machine Learning'], // Add/Remove skills
  },
  {
    category: 'Networking',
    icon: <Network className="h-5 w-5 text-accent" />,
    skills: ['TCP/IP', 'HTTP/HTTPS', 'DNS', 'Network Protocols'], // Add/Remove skills
  },
  {
    category: 'Tools & Platforms',
    icon: <Settings className="h-5 w-5 text-accent" />, // Reusing Settings icon or choose another
    skills: ['Git', 'Docker', 'Linux', 'Firebase', 'AWS (Basic/if applicable)'], // Add/Remove skills
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <Card key={category.category} className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-3 pb-3">
              {category.icon}
              <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm bg-accent/20 text-accent-foreground hover:bg-accent/30">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
