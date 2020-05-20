import technologiesData from '../../helpers/data/technologiesData';

import utils from '../../helpers/utils';

const createTechPage = () => {
  technologiesData.getTechnologies()
    .then((technologies) => {
      const sortedTechnologies = technologies.sort((a, b) => a.sequence - b.sequence);
      let domString = '';
      domString += '<h2>Skills</h2>';
      domString += '<hr></hr>';
      domString += '<div class="container d-flex flex-wrap">';
      domString += '<div class="row">';
      sortedTechnologies.forEach((tech) => {
        domString += '<div class="col-sm-4 p-5">';
        domString += `<img src="${tech.imageUrl}" class="techIcon">`;
        domString += `<h5>${tech.name}</h5>`;
        domString += `<p class="text-center"><small class="text-muted">${tech.use}</small></p>`;
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('technologiesPage', domString);
    })
    .catch((err) => console.error('could not list technologies', err));
};

export default { createTechPage };
