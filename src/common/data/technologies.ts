import { Technology } from '../models/Technology';

export const technologyTypes = {
  html: {
    name: 'HTML',
    icon: 'html5',
  },
  css: {
    name: 'CSS',
    icon: 'css3',
  },
  javaScript: {
    name: 'JavaScript',
    icon: 'javascript',
  },
  react: {
    name: 'React',
    icon: 'react',
  },
  sass: {
    name: 'SASS',
    icon: 'sass',
  },
  redux: {
    name: 'Redux',
    icon: 'redux',
  },
  firebase: {
    name: 'Firebase',
    icon: 'firebase',
  },
  node: {
    name: 'Node.js',
    icon: 'node-dot-js',
  },
  mongodb: {
    name: 'MongoDB',
    icon: 'mongodb',
  },
  git: {
    name: 'Git',
    icon: 'git',
  },
};

export const technologies: Technology[] = [
  technologyTypes.html,
  technologyTypes.css,
  technologyTypes.sass,
  technologyTypes.javaScript,
  technologyTypes.react,
  technologyTypes.redux,
  technologyTypes.node,
  technologyTypes.mongodb,
  technologyTypes.git,
  technologyTypes.firebase,
];
