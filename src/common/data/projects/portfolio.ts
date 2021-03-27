import { Project } from '../../models/Project';
import { technologyTypes } from '../technologyTypes';

import img1 from '../../../assets/images/projects/portfolio-web-img-1.jpg';
import img2 from '../../../assets/images/projects/portfolio-web-img-2.jpg';
import img3 from '../../../assets/images/projects/portfolio-web-img-3.jpg';
import img4 from '../../../assets/images/projects/portfolio-web-img-4.jpg';
import img5 from '../../../assets/images/projects/portfolio-web-img-5.jpg';
import img6 from '../../../assets/images/projects/portfolio-web-img-6.jpg';
import img7 from '../../../assets/images/projects/portfolio-web-img-7.jpg';

export const portfolio: Project = {
  technologies: [
    technologyTypes.html,
    technologyTypes.css,
    technologyTypes.javaScript,
    technologyTypes.react,
    technologyTypes.sass,
    technologyTypes.redux,
    technologyTypes.firebase,
  ],
  images: [img1, img2, img3, img4, img5, img6, img7],
  id: '2',
  title: 'Old portfolio',
  description: 'Old version of portfolio website.',
  image: img1,
  githubLink: 'https://github.com/Sebastian-Debicki/Portfolio-vol.2',
  demoLink: 'https://sebastian-debicki.web.app/',
};
