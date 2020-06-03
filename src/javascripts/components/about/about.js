import utils from '../../helpers/utils';

import '../../../styles/_animations.scss';
import './about.scss';

const buildAboutSection = () => {
  let domString = '<div>';
  domString += '<h2>About Me</h2>';
  domString += '<hr></hr>';
  domString += '<div class="sectionIntro">';
  domString += '<p class="text-center">I am a Nashville-based software developer, combining extensive business analysis experience with software development skills to make technology work for you!</p>';

  domString += '<div class="animatedButtonDiv m-4">';
  domString += '<button class="animatedButton">';
  domString += '<a href="https://www.linkedin.com/in/anca-simon/" target="_blank" class="btn btn-light blueButton">Download my resume</a>';
  domString += '<div class="animatedButton__horizontal"></div>';
  domString += '<div class="animatedButton__vertical"></div>';
  domString += '</button>';
  domString += '</div>';

  domString += '<h6 class="font-italic pt-3">Why software development?</h6>';
  domString += '</div>';
  domString += '<div class="d-flex flex-wrap sectionIntro p-2">';
  domString += '<div class="col-md-4 p-2">';
  domString += '<i class="fas fa-pencil-ruler introIcon p-2"></i>';
  domString += '<div class="card bg-light p-2">';
  domString += '<p class="card-text text-center"><small>I still remember the awe, pride, and amazement I experienced when I went to a demo session with our developers where they were showing us the first iteration of a module for which I had written the business specifications and done the mockups. I had been a business analyst for a few months and written specs already for lots of little enhancements. Writing, testing, releasing, and training others on each of them had been exciting.</small></p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="col-md-4 p-2">';
  domString += '<i class="fas fa-magic introIcon p-2"></i>';
  domString += '<div class="card bg-light p-2">';
  domString += '<p class="card-text text-center"><small>However, that internal demo with just our immediate team remains so memorable. There had been nothing, and now there was something - something I had envisioned and first put on paper. To be clear, it was most definitely not just my work. We had had lots of meetings with  clients, developers, my fellow BAs and my direct manager, who were instrumental in helping shape my thinking and our project. And then we had more meetings with customers to review mockups. And more tweaks. Numerous times.</small></p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="col-md-4 p-2">';
  domString += '<i class="fas fa-mountain introIcon p-2"></i>';
  domString += '<div class="card bg-light p-2">';
  domString += '<p class="card-text text-center"><small>Yet, that moment of seeing something come out of nothing (in some ways) was remarkable. It was followed by much harder work - many sprints, many reviews, many edits, much testing. Watching our users envision the future benefits of this new feature always reminded me of that early first demo and my own surprise and delight. That is why I pursued the developer role.</small></p>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('bioPage', domString);
};

export default { buildAboutSection };
