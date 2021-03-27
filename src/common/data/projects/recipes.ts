import { Project } from '../../models/Project';
import { technologyTypes } from '../technologyTypes';

import img1 from '../../../assets/images/projects/recepies-app-img-1.jpg';
import img2 from '../../../assets/images/projects/recepies-app-img-2.jpg';
import img3 from '../../../assets/images/projects/recepies-app-img-3.jpg';
import img4 from '../../../assets/images/projects/recepies-app-img-4.jpg';
import img5 from '../../../assets/images/projects/recepies-app-img-5.jpg';
import img6 from '../../../assets/images/projects/recepies-app-img-6.jpg';
import img7 from '../../../assets/images/projects/recepies-app-img-7.jpg';
import img8 from '../../../assets/images/projects/recepies-app-img-8.jpg';
import img9 from '../../../assets/images/projects/recepies-app-img-9.jpg';
import img10 from '../../../assets/images/projects/recepies-app-img-10.jpg';

export const recipes: Project = {
  technologies: [
    technologyTypes.html,
    technologyTypes.css,
    technologyTypes.javaScript,
    technologyTypes.react,
    technologyTypes.sass,
    technologyTypes.redux,
    technologyTypes.firebase,
  ],
  images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
  id: '3',
  title: 'Recipes App',
  description: 'A place where you can store your recepies.',
  image: img1,
  githubLink: 'https://github.com/Sebastian-Debicki/Recepies-app',
  demoLink: 'https://recepiesapp.web.app/',
};
