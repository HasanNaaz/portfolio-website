import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4 md:px-6 bg-secondary rounded-lg my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-foreground mb-4">
            I'm a passionate and driven Computer Science and Engineering graduate from BRAC University, Bangladesh. My academic journey equipped me with a strong foundation in software development, algorithms, and data structures.
          </p>
          <p className="text-lg text-foreground mb-4">
            My core language proficiency lies in Python, and I developed a keen interest in Deep Learning during my thesis work. I also gained valuable experience in Networking concepts through coursework.
          </p>
          <p className="text-lg text-foreground">
            I enjoy tackling challenging problems and building practical applications that solve real-world needs. I'm eager to leverage my skills and contribute to innovative projects in the tech industry.
          </p>
        </div>
        <Card className="bg-card shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
             <div className="bg-accent p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-accent-foreground" />
             </div>
            <CardTitle className="text-2xl text-primary">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold text-foreground">BRAC University</h3>
            <p className="text-muted-foreground">Dhaka, Bangladesh</p>
            <p className="text-foreground mt-1">B.Sc. in Computer Science and Engineering</p>
            <p className="text-muted-foreground text-sm">[Graduation Year or Expected Year]</p>
             {/* Add relevant coursework or honors if desired */}
             <p className="text-foreground mt-2 font-medium">Key Coursework:</p>
             <ul className="list-disc list-inside text-muted-foreground text-sm mt-1">
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming (Python)</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning / Deep Learning</li>
             </ul>
            <p className="text-foreground mt-2 font-medium">Thesis:</p>
            <p className="text-muted-foreground text-sm">[Your Thesis Title/Topic in Deep Learning]</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
