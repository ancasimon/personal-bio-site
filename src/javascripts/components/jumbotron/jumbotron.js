import utils from '../../helpers/utils';
import './jumbotron.scss';

const buildJumbotron = () => {
  let domString = '';
  domString += '<div class="jumbotron-fluid">';
  domString += '  <div class="container-fluid">';
  domString += '    <img id="jumbo-pic" src="../../../src/img-personal-bio-site/Anca_Charlies_Bunion.jpeg" alt="developer on top of Chalies Bunion, Smoky Mtns">';
  domString += '  </div>';
  domString += '</div>';
  utils.printToDom('jumbo-div', domString);
};

export default { buildJumbotron };
