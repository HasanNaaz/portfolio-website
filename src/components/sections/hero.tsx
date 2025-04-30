import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image

const HeroSection = () => {
  return (
    <section id="hero" className="container mx-auto py-20 md:py-32 px-4 md:px-6 flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="md:w-1/2 lg:w-3/5 space-y-6 mb-10 md:mb-0 md:pr-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A recent CSE graduate from BRAC University, passionate about Python, Deep Learning, and building innovative web solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get In Touch</Link>
          </Button>
           <Button size="lg" variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</Link>
          </Button>
        </div>
      </div>
       <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
         {/* Placeholder Profile Image */}
        <Image
            src="https://picsum.photos/400/400" // Replace with your actual image path or URL
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-accent object-cover"
            priority // Load image faster as it's in the hero section
          />
      </div>
    </section>
  );
};

export default HeroSection;
