import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 mt-16 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-foreground hover:text-accent transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-foreground hover:text-accent transition-colors" />
            </Link>
          </Button>
          {/* Add other social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
