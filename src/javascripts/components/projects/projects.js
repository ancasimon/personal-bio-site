import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';
import projectDetails from './projectDetailsModal';
import './projects.scss';

const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      const sortedProjects = projects.sort((a, b) => b.sequence - a.sequence);
      console.log('sortedprojects', sortedProjects);
      let domString = '';
      domString += '<h2>Projects</h2>';
      domString += '<hr></hr>';
      domString += '<div class="sectionIntro">';
      domString += '<p class="text-center">This section highlights my progress throughout the bootcamp program at the Nashville Software School by showcasing projects I worked on, both individually and in a group setting. As I look back on this list of sites, I remember how exciting it felt to gain new skills and knowledge every week and how exhilarating it also felt to constantly realize how much I still have to learn. That is one of the reasons I love the software development field - I know there will always be new concepts to learn and new skills to practice!</p>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap project-container">';
      domString += '<div class="row">';
      sortedProjects.forEach((project) => {
        if (project.available === true) {
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
          console.error('project id in card', project.id);
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
        }
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('projectsPage', domString);
    })
    .catch((err) => console.error('getProjects broke', err));
};

const openProjectDetails = (e) => {
  $('#btnOpenProjectDetails').modal('show');
  const projectId = e.target.dataset.id;
  projectDetails.buildProjectDetails(projectId);
};

const createProjectCardsEvents = () => {
  $('body').on('click', '.btnOpenProjectDetails', openProjectDetails);
};

export default { createProjectCards, createProjectCardsEvents };
