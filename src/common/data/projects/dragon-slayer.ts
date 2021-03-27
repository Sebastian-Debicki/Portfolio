import { Project } from '../../models/Project';
import { technologyTypes } from '../technologyTypes';

import img1 from '../../../assets/images/projects/dragon-slayer-img-1.jpg';
import img2 from '../../../assets/images/projects/dragon-slayer-img-2.jpg';
import img3 from '../../../assets/images/projects/dragon-slayer-img-3.jpg';
import img4 from '../../../assets/images/projects/dragon-slayer-img-4.jpg';
import img5 from '../../../assets/images/projects/dragon-slayer-img-5.jpg';
import img6 from '../../../assets/images/projects/dragon-slayer-img-6.jpg';
import img7 from '../../../assets/images/projects/dragon-slayer-img-7.jpg';
import img8 from '../../../assets/images/projects/dragon-slayer-img-8.jpg';
import img9 from '../../../assets/images/projects/dragon-slayer-img-9.jpg';
import img10 from '../../../assets/images/projects/dragon-slayer-img-10.jpg';
import img11 from '../../../assets/images/projects/dragon-slayer-img-11.jpg';

export const dragonSlayer: Project = {
  technologies: [
    technologyTypes.html,
    technologyTypes.css,
    technologyTypes.javaScript,
    technologyTypes.react,
    technologyTypes.sass,
    technologyTypes.redux,
    technologyTypes.firebase,
  ],
  images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11],
  id: '5',
  title: 'Dragon Slayer',
  description:
    'You can choose from three avalible heroes - Warrior, Wizard and Ninja. Every hero has them own statistics which are increased by collecting experience in fighting. Enjoy the game!',
  image: img1,
  githubLink: 'https://github.com/Sebastian-Debicki/Dragon-Slayer-Game',
  demoLink: 'https://game-4af87.web.app/',
};
