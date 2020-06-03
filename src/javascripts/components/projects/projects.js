import utils from '../../helpers/utils';

import projectData from '../../helpers/data/projectData';
import projectDetails from './projectDetailsModal';

import './projects.scss';

const getFeaturedProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      const sortedProjects = projects.sort((a, b) => b.sequence - a.sequence);
      let domString = '';
      domString += '<div class="container d-flex flex-wrap project-container">';
      domString += '<div class="row">';
      sortedProjects.forEach((project) => {
        if (project.capstone === true) {
          domString += '<div class="col-md-4 p-2">';
          domString += '<div class="card project-card">';
          domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h4 class="card-title">${project.title}</h4>`;
          domString += `<p class="card-title text-center"><small class="text-muted">${project.date}</small></p>`;
          domString += `<p class="card-title">${project.briefDescription}</p>`;
          domString += `<p class="card-title text-center"><small>${project.technologiesUsed}</small></p>`;
          domString += '<div>';
          domString += `<a href="${project.url}" class="card-link" target="_blank">Find it here</a>`;
          domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">And on Github</a>`;
          domString += '</div>';
          domString += `<button id="btnOpenProjectDetails" type="button" class="btn btn-secondary btnOpenProjectDetails mt-3" data-toggle="modal" data-target="#projectModal" data-id=${project.id}>Learn more</button>`;
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';

          utils.printToDom('projectsDiv', domString);
        }
      });
      domString += '</div>';
      domString += '</div>';
    })
    .catch((err) => console.error('getFeaturedProjects broke', err));
};


const getIndividualProjects = (e) => {
  e.preventDefault();
  projectData.getProjects()
    .then((projects) => {
      const sortedProjects = projects.sort((a, b) => b.sequence - a.sequence);
      let domString = '';
      domString += '<div class="container d-flex flex-wrap project-container">';
      domString += '<div class="row">';
      sortedProjects.forEach((project) => {
        if (project.group === false && project.capstone === false) {
          domString += '<div class="col-md-4 p-2 animatedDiv">';
          domString += '<div class="card project-card">';
          domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h4 class="card-title">${project.title}</h4>`;
          domString += `<p class="card-title text-center"><small class="text-muted">${project.date}</small></p>`;
          domString += `<p class="card-title">${project.briefDescription}</p>`;
          domString += `<p class="card-title text-center"><small>${project.technologiesUsed}</small></p>`;
          domString += '<div>';
          domString += `<a href="${project.url}" class="card-link" target="_blank">Find it here</a>`;
          domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">And on Github</a>`;
          domString += '</div>';
          domString += `<button id="btnOpenProjectDetails" type="button" class="btn btn-secondary btnOpenProjectDetails mt-3" data-toggle="modal" data-target="#projectModal" data-id=${project.id}>Learn more</button>`;
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';

          utils.printToDom('projectsDiv', domString);
        }
      });
      domString += '</div>';
      domString += '</div>';
    })
    .catch((err) => console.error('getIndividualProjects broke', err));
};


const getGroupProjects = (e) => {
  e.preventDefault();
  projectData.getProjects()
    .then((projects) => {
      const sortedProjects = projects.sort((a, b) => b.sequence - a.sequence);
      let domString = '';
      domString += '<div class="container d-flex flex-wrap project-container">';
      domString += '<div class="row">';
      sortedProjects.forEach((project) => {
        if (project.group === true) {
          domString += '<div class="col-md-4 p-2">';
          domString += '<div class="card project-card">';
          domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h4 class="card-title">${project.title}</h4>`;
          domString += `<p class="card-title text-center"><small class="text-muted">${project.date}</small></p>`;
          domString += `<p class="card-title">${project.briefDescription}</p>`;
          domString += `<p class="card-title text-center"><small>${project.technologiesUsed}</small></p>`;
          domString += '<div>';
          domString += `<a href="${project.url}" class="card-link" target="_blank">Find it here</a>`;
          domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">And on Github</a>`;
          domString += '</div>';
          domString += `<button id="btnOpenProjectDetails" type="button" class="btn btn-secondary btnOpenProjectDetails mt-3" data-toggle="modal" data-target="#projectModal" data-id=${project.id}>Learn more</button>`;
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';

          utils.printToDom('projectsDiv', domString);
        }
      });
      domString += '</div>';
      domString += '</div>';
    })
    .catch((err) => console.error('getGroupProjects broke', err));
};

const createProjectCards = () => {
  let domString = '';
  domString += '<h2>Portfolio</h2>';
  domString += '<hr></hr>';
  domString += '<div class="sectionIntro">';
  domString += '<p class="text-center">This section highlights my progress throughout the Nashville Software School bootcamp program. Looking back, I remember how exciting it felt to gain new knowledge every week and how encouraging it also felt to consistently realize how much there is to learn. That is one of the reasons I enjoy the software development field - I know there will always be new concepts to learn and new skills to practice!</p>';
  domString += '</div>';

  domString += '<div class="container mt-5">';
  domString += '<div class="row">';

  // domString += '<div class="col">';
  // domString += '<div class="animatedButtonDiv">';
  // domString += '<button class="animatedButton">';
  // domString += '<a id="featuredProjects" href="#projectsPage" class="list-group-item list-group-item-action blueButton">Featured Projects</a>';
  // domString += '<div class="animatedButton__horizontal"></div>';
  // domString += '<div class="animatedButton__vertical"></div>';
  // domString += '</button>';
  // domString += '</div>';

  domString += '<div class="col">';
  domString += '<div class="animatedButtonDiv">';
  domString += '<button id="individualProjects" class="animatedButton">';
  domString += '<a href="#projectsPage" class="list-group-item list-group-item-action blueButton">Individual Projects</a>';
  domString += '<div class="animatedButton__horizontal"></div>';
  domString += '<div class="animatedButton__vertical"></div>';
  domString += '</button>';
  domString += '</div>';

  domString += '</div>';
  domString += '<div class="col">';
  domString += '<div class="animatedButtonDiv">';
  domString += '<button id="groupProjects" class="animatedButton">';
  domString += '<a href="#projectsPage" class="list-group-item list-group-item-action blueButton">Group Projects</a>';
  domString += '<div class="animatedButton__horizontal"></div>';
  domString += '<div class="animatedButton__vertical"></div>';
  domString += '</button>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';
  domString += '</div>';

  domString += '<div id="projectsDiv">';
  // domString += getFeaturedProjects();
  domString += '</div>';

  utils.printToDom('projectsPage', domString);
};


const openProjectDetails = (e) => {
  $('#btnOpenProjectDetails').modal('show');
  const projectId = e.target.dataset.id;
  projectDetails.buildProjectDetails(projectId);
};

const createProjectCardsEvents = () => {
  $('body').on('click', '#featuredProjects', getFeaturedProjects);
  $('body').on('click', '#individualProjects', getIndividualProjects);
  $('body').on('click', '#groupProjects', getGroupProjects);
  $('body').on('click', '.btnOpenProjectDetails', openProjectDetails);
};

export default { createProjectCards, createProjectCardsEvents };
