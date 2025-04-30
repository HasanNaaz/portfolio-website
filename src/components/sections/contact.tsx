"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // --- Mock Submission ---
    console.log('Form data submitted:', data);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
      variant: 'default', // Use 'default' which maps to your theme's accent
    });
    form.reset(); // Reset form after successful mock submission

    // --- Real Submission (Example using fetch) ---
    /*
    try {
      const response = await fetch('/api/contact', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I will get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again later or contact me directly.",
        variant: "destructive",
      });
    }
    */
  };

  return (
    <section id="contact" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Send me a message</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} className="bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message here..." {...field} rows={5} className="bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="space-y-8">
           <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
           <div className="space-y-4">
             <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent"/>
                <a href="mailto:your.email@bracu.ac.bd" className="text-foreground hover:text-accent transition-colors">your.email@bracu.ac.bd</a>
             </div>
             {/* Add Phone number if desired */}
             {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent"/>
                <span className="text-foreground">+880 1XXXXXXXXX</span>
             </div> */}
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-accent"/>
                 <Link href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                    linkedin.com/in/your-linkedin-profile
                 </Link>
              </div>
               <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-accent"/>
                 <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                    github.com/your-github-username
                 </Link>
              </div>
           </div>
           <p className="text-muted-foreground">
             Feel free to reach out via email or connect with me on social media. I'm always open to discussing new projects, opportunities, or ideas!
           </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
