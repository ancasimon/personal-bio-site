import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';

const createProjectCards = () => {
  const projects = projectData.getProjects();
  let domString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="project">';
      domString += `<h4 class="projectData">Project title: ${project.title}</h4>`;
      domString += `<section class="projectData">${project.screenshot}</section>`;
      domString += `<p class="projectData">What it is: ${project.description}</p>`;
      domString += `<p class="projectData">What I used: ${project.technologiesUsed}</p>`;
      domString += `<h5 class="projectData">Available yet? ${project.available}</h5>`;
      domString += `<p class="projectData">Available here: ${project.url}</p>`;
      domString += `<p class="projectData">My GitHub: ${project.githubUrl}</p>`;
      domString += '</div>';
    }
  });
  utils.printToDom('projectsTable', domString);
};

export default { createProjectCards };
