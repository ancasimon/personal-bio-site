import utils from '../../helpers/utils';
import './jumbotron.scss';

import ancaCharliesBunion from '../../../img-personal-bio-site/Anca_Charlies_Bunion.jpg';

const buildJumbotron = () => {
  let domString = '';
  domString += '<div class="card bg-dark text-white">';
  domString += `<img id="jumbo-pic" src=${ancaCharliesBunion} alt="developer on top of Chalies Bunion, Smoky Mtns" class="card-img full-img img-fluid">`;
  domString += '</div>';
  utils.printToDom('jumbo-div', domString);
};

export default { buildJumbotron };
