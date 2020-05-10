import utils from '../../helpers/utils';

const buildAboutSection = () => {
  let domString = '<div>';
  domString += '<h2>About Me</h2>';
  domString += '<hr></hr>';
  domString += '<div class="aboutSection">';
  domString += '<blockquote class="blockquote text-center">';
  domString += '<p>I am currently attending the Nashville Software School. I have worked in the software development arena for over 10 years - initially as a technical writer and later as a business analyst and product manager. I am excited to finally delve into the nuts and bolts of programming after tangentially learning about it through my peers and projects.</p>';
  domString += '<h4 class="font-italic">Really curious to understand why I am pursuing development? Read on!</h4>';
  domString += '</blockquote>';
  domString += '</div>';
  domString += '<div class="d-flex flex-wrap aboutSection">';
  domString += '<div class="col-md-4">';
  domString += '<div class="card border-dark bg-light p-2">';
  domString += '<p class="card-text text-center">I still remember the awe, pride, and amazement I experienced when I went to a demo session with our developers where they were showing us the first iteration of a module for which I had written the business specifications and done the mockups. I had been a business analyst for a few months and written specs already for lots of little enhancements. Writing, testing, releasing, and training others on each of them had been exciting.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="col-md-4">';
  domString += '<div class="card border-dark bg-light p-2">';
  domString += '<p class="card-text text-center">However, that internal demo with just our immediate team remains so memorable. There had been nothing, and now there was something - something I had envisioned and first put on paper. To be clear, it was most definitely not just my work. We had had lots of meetings with  clients, developers, my fellow BAs and my direct manager, who were instrumental in helping shape my thinking and our project. And then we had more meetings with customers to review mockups. And more tweaks. Numerous times.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="col-md-4">';
  domString += '<div class="card border-dark bg-light p-2">';
  domString += '<p class="card-text text-center">Yet, that moment of seeing something come out of nothing (in some ways) was remarkable. It was followed by much harder work - many sprints, many reviews, many edits, much testing. Watching our users envision the future benefits of this new feature always reminded me of that early first demo and my own surprise and delight. That’s why I am pursuing the developer role today. I plan to combine my previous skills and experience with what I am learning now so that I can continue to contribute in solving big and small business and technical problems.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('bioPage', domString);
};

export default { buildAboutSection };
