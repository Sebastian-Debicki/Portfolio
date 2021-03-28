import { Project } from '../../models/Project';
import { technologyTypes } from '../technologies';

import img1 from '../../../assets/images/projects/shop-img-1.jpg';
import img2 from '../../../assets/images/projects/shop-img-2.jpg';
import img3 from '../../../assets/images/projects/shop-img-3.jpg';
import img4 from '../../../assets/images/projects/shop-img-4.jpg';
import img5 from '../../../assets/images/projects/shop-img-5.jpg';
import img6 from '../../../assets/images/projects/shop-img-6.jpg';

export const shop: Project = {
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
  title: 'Shop',
  description:
    'You can add products to the shopping cart. In the shopping cart you can increase or decrease product order amount, you can also delete product from cart.',
  image: img1,
  githubLink: 'https://github.com/Sebastian-Debicki/Shop',
  demoLink: 'https://shop-debicki.web.app/',
};
