import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';

const buildProjectDetails = (projectId) => {
  projectData.getSingleProject(projectId)
    .then((response) => {
      const project = response.data;
      let domString = '';
      domString += '<div>';
      domString += `<h2 class="card-title">${project.title}</h2>`;
      domString += `<img src="${project.screenshot}" class="rounded mx-auto d-block img-thumbnail" alt="${project.alt}">`;
      domString += '<div class="card-body">';
      domString += '<h6>What it is: </h6>';
      domString += `<p class="card-text"><small>${project.description}</small></p>`;
      domString += '<h6>What I learned: </h6>';
      domString += `<p class="card-text"><small>${project.background}</small></p>`;
      domString += `<h6 class="card-text">${project.technologiesUsed}</h6>`;
      domString += `<a href="${project.url}" class="card-link" target="_blank">Find it here</a>`;
      domString += `<a href="${project.githubUrl}" class="card-link" target="_blank">And on Github</a>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('projectDetails', domString);
    })
    .catch((error) => console.error('could not display project details', error));
};

export default { buildProjectDetails };
