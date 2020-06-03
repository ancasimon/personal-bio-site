import utils from '../../helpers/utils';

const buildNavbar = () => {
  let domString = '';
  domString += '<div id="header">';
  domString += '  <nav class="navbar navbar-expand-lg bg-light fixed-top">';
  domString += '    <a id="brand" class="navbar-brand mb-0 h1 nav-item nav-link active" href="#jumbo-pic">Anca Simon</a>';
  domString += '    <button class="navbar-toggler navbar-light btn btn-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
  domString += '     <span class="navbar-toggler-icon"></span>';
  domString += '    </button>';
  domString += '    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">';
  domString += '    <div id="navLinks" class="navbar-nav">';
  domString += '      <a id="navToBio" class="nav-item nav-link ml-auto" href="#bioPage">About Me</a>';
  // domString += '      <a id="navToPortfolio" class="nav-item nav-link ml-auto" href="#portfolioPage">Portfolio</a>';
  domString += '      <a id="navToProjects" class="nav-item nav-link ml-auto" href="#projectsPage">Portfolio</a>';
  domString += '      <a id="navToTechnologies" class="nav-item nav-link ml-auto" href="#technologiesPage">Skills</a>';
  // domString += '      <a id="navToExperience" class="nav-item nav-link ml-auto" href="#experiencePage">Experience & Education</a>';
  domString += '      <a id="navToFooter" class="nav-item nav-link ml-auto" href="#contactPage">Contact</a>';
  domString += '    </div>';
  domString += '   </div>';
  domString += '  </nav>';
  domString += '</div>';
  utils.printToDom('nav-div', domString);
};

export default { buildNavbar };
