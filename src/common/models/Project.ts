import { Technology } from './Technology';

export interface Project {
  technologies: Technology[];
  images: string[];
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
}
