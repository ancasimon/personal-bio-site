import 'bootstrap';
import '../styles/main.scss';
import about from './components/about/about';
import jumbotron from './components/jumbotron/jumbotron';
import nav from './components/navbar/navbar';
import projects from './components/projects/projects';

console.error('hi');

const init = () => {
  nav.buildNavbar();
  jumbotron.buildJumbotron();
  about.buildAboutSection();
  projects.createProjectCards();
};

init();
