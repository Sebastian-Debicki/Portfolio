import { Project } from '../../models/Project';
import { technologyTypes } from '../technologyTypes';

import img1 from '../../../assets/images/projects/hangman-img-1.jpg';
import img2 from '../../../assets/images/projects/hangman-img-2.jpg';
import img3 from '../../../assets/images/projects/hangman-img-3.jpg';
import img4 from '../../../assets/images/projects/hangman-img-4.jpg';
import img5 from '../../../assets/images/projects/hangman-img-5.jpg';
import img6 from '../../../assets/images/projects/hangman-img-6.jpg';

export const hangmanGame: Project = {
  technologies: [
    technologyTypes.html,
    technologyTypes.css,
    technologyTypes.javaScript,
    technologyTypes.react,
    technologyTypes.sass,
    technologyTypes.redux,
    technologyTypes.firebase,
  ],
  images: [img1, img2, img3, img4, img5, img6],
  id: '1',
  title: 'Hangman Game',
  description: 'Try to guess the word.',
  image: img1,
  githubLink: 'https://github.com/ssebaa9/Hangman-game',
  demoLink: 'https://hangman-game-debicki.firebaseapp.com/',
};
