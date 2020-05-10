import utils from '../../helpers/utils';

const buildNavbar = () => {
  let domString = '';
  domString += '<div id="header">';
  domString += '  <nav class="navbar navbar-light bg-light fixed-top">';
  domString += '    <a id="brand" class="navbar-brand mb-0 h1 nav-item nav-link active" href="#jumbo-pic">Anca Simon</a>';
  domString += '    <div id="navLinks" class="nav justify-content-end navbar">';
  domString += '      <a id="navToBio" class="nav-item nav-link" href="#bioPage">About Me</a>';
  domString += '      <a id="navToProjects" class="nav-item nav-link" href="#projectsPage">Portfolio</a>';
  domString += '      <a id="navToTechnologies" class="nav-item nav-link" href="#technologiesPage">Skills</a>';
  // domString += '      <a id="navToExperience" class="nav-item nav-link" href="#experiencePage">Experience & Education</a>';
  domString += '      <a id="navToFooter" class="nav-item nav-link" href="#contact">Contact</a>';
  domString += '    </div>';
  domString += '  </nav>';
  domString += '</div>';
  utils.printToDom('nav-div', domString);
};

export default { buildNavbar };
