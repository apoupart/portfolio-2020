/**
 * Import all the font awesome icon here to use all around the website
 */

import fontawesome from '@fortawesome/fontawesome';
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import {
  faCss3Alt,
  faHtml5,
  faSass,
  faJava,
  faJsSquare,
  faPhp,
  faAngular,
  faGithubAlt,
  faLaravel,
  faMicrosoft,
  faNodeJs,
  faReact,
  faVuejs,
  faUnity,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faCode,
  faDumbbell,
  faLaptopCode,
  faLowVision,
  faStream,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Add font awesome icon to the main library.
 */
library.add(
  faPhp,
  faWordpressSimple,
  faUnity,
  faJava,
  faJsSquare,
  faReact,
  faHtml5,
  faSass,
  faCss3Alt,
  faVuejs,
  faLaptopCode,
  faGithubAlt,
  faStream,
  faMicrosoft,
  faNodeJs,
  faLaravel,
  faAngular,
  faCode,
  faLowVision,
  faCheckCircle,
  faDumbbell
);
