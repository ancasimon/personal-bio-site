import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';

const createProjectCards = () => {
  const projects = projectData.getProjects();
  let domString = '<div class="d-flex flex-wrap project-container">';
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="card project-card rounded-lg" style="width: 18rem;">';
      domString += `<img src="${project.screenshot}" class="card-img-top" alt="${project.alt}">`;
      domString += '<div class="card-body">';
      domString += `<h5 class="card-title">${project.title}</h5>`;
      domString += `<p class="card-text">${project.description}</p>`;
      domString += `<p class="card-text">${project.technologiesUsed}</p>`;
      domString += '</div>';
      domString += '<div class="card-body">';
      domString += `<a href="${project.url}" class="card-link">Find it here</a>`;
      domString += `<a href="${project.githubUrl}" class="card-link">Anca's Github</a>`;
      domString += '</div>';
      domString += '</div>';
    }
  });
  domString += '</div>';
  utils.printToDom('projectsTable', domString);
};

export default { createProjectCards };
