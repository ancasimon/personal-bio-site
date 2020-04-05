import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import about from './components/about/about';
import jumbotron from './components/jumbotron/jumbotron';
import nav from './components/navbar/navbar';
import projects from './components/projects/projects';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  nav.buildNavbar();
  jumbotron.buildJumbotron();
  about.buildAboutSection();
  projects.createProjectCards();
};

init();
