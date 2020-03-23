import utils from '../../helpers/utils';
import './jumbotron.scss';

const buildJumbotron = () => {
  let domString = '';
  domString += '<div class="card bg-dark text-white">';
  domString += '<img id="jumbo-pic" src="../../../src/img-personal-bio-site/Anca_Charlies_Bunion.jpeg" alt="developer on top of Chalies Bunion, Smoky Mtns" class="card-img full-img img-fluid">';
  domString += '</div>';
  utils.printToDom('jumbo-div', domString);
};

export default { buildJumbotron };
