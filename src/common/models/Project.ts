export interface Project {
  id: string;
  technologies: Technology[];
  images: string[];
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  creationDate: string;
}

interface Technology {
  name: string;
  icon: string;
}