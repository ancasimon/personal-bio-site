import 'bootstrap';
import '../styles/main.scss';
import jumbotron from './components/jumbotron/jumbotron';
import nav from './components/navbar/navbar';
import projects from './components/projects/projects';

console.error('hi');

const init = () => {
  nav.buildNavbar();
  jumbotron.buildJumbotron();
  projects.createProjectCards();
};

init();
