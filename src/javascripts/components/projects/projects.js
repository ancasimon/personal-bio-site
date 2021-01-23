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
        if (project.capstone === true && project.available === true) {
          domString += '<div class="col-md-4 p-2">';
          domString += '<div class="card project-card">';
          domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h4 class="card-title">${project.title}</h4>`;
          domString += `<p class="card-title text-center"><small class="text-muted">${project.date}</small></p>`;
          if (project.demo) {
            domString += '<div>';
            domString += `<a href="${project.demo}" class="demo" target="_blank">Watch demo!</a>`;
            domString += '</div>';
          }
          if (project.techDemo) {
            domString += '<div>';
            domString += `<a href="${project.techDemo}" class="techDemo" target="_blank">And how I built it!</a>`;
            domString += '</div>';
          }
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
        if (project.group === false && project.capstone === false && project.available === true) {
          domString += '<div class="col-md-4 p-2">';
          domString += '<div class="card project-card">';
          domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h4 class="card-title">${project.title}</h4>`;
          domString += `<p class="card-title text-center"><small class="text-muted">${project.date}</small></p>`;
          domString += `<p class="card-title">${project.briefDescription}</p>`;
          domString += `<p class="card-title text-center"><small>${project.technologiesUsed}</small></p>`;
          domString += '<div>';
          if (project.deployed === true) {
            domString += `<a href="${project.url}" class="card-link" target="_blank">Find it here</a>`;
            domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">And on Github</a>`;
          } else {
            domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">Find it on Github</a>`;
          }
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
        if (project.group === true && project.available === true) {
          domString += '<div class="col-md-4 p-2">';
          domString += '<div class="card project-card">';
          domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h4 class="card-title">${project.title}</h4>`;
          domString += `<p class="card-title text-center"><small class="text-muted">${project.date}</small></p>`;
          domString += `<p class="card-title">${project.briefDescription}</p>`;
          domString += `<p class="card-title text-center"><small>${project.technologiesUsed}</small></p>`;
          domString += '<div>';
          if (project.deployed === true) {
            domString += `<a href="${project.url}" class="card-link" target="_blank">Find it here</a>`;
            domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">And on Github</a>`;
          } else {
            domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">Find it on Github</a>`;
          }
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
  domString += '<p class="text-center">Check out these projects highlighting my progress throughout the Nashville Software School bootcamp program. <br /> Graduation date is here: January 12, 2021! </p>';
  domString += '</div>';

  domString += '<div class="container mt-5">';
  domString += '<div class="row">';

  domString += '<div class="col-md-4">';
  domString += '<div class="animatedButtonDiv">';
  domString += '<button class="animatedButton">';
  domString += '<a id="featuredProjects" href="#projectsPage" class="list-group-item list-group-item-action blueButton">Featured Projects</a>';
  domString += '<div class="animatedButton__horizontal"></div>';
  domString += '<div class="animatedButton__vertical"></div>';
  domString += '</button>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="animatedButtonDiv">';
  domString += '<button id="individualProjects" class="animatedButton">';
  domString += '<a href="#projectsPage" class="list-group-item list-group-item-action blueButton">Individual Projects</a>';
  domString += '<div class="animatedButton__horizontal"></div>';
  domString += '<div class="animatedButton__vertical"></div>';
  domString += '</button>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
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
  domString += getFeaturedProjects();
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
