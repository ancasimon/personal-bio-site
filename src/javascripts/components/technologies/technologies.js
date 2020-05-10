import technologiesData from '../../helpers/data/technologiesData';

import utils from '../../helpers/utils';

const createTechPage = () => {
  technologiesData.getTechnologies()
    .then((technologies) => {
      const sortedTechnologies = technologies.sort((a, b) => a.name - b.name);
      console.error('sorted techs', sortedTechnologies);
      let domString = '';
      domString += '<div class="container d-flex flex-wrap">';
      domString += '<div class="row">';
      sortedTechnologies.forEach((tech) => {
        domString += '<div class="col-sm-4 p-5">';
        domString += `<img src="${tech.imageUrl}" class="techIcon">`;
        domString += `<h6 >${tech.name}</h6>`;
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('technologiesTable', domString);
    })
    .catch((err) => console.error('could not list technologies', err));
};

export default { createTechPage };
