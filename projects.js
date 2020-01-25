console.log("Hi Simon Projects Page");

const projects = [
    {
        title: "Cool Project",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "project description: A good project description includes 'the what', 'the why', and 'the how'",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github", 
        available: true,
        url: "https://github.com/ancasimon?tab=projects",
        githubUrl: "https://github.com/ancasimon"
    },
    {
        title: "Project #2",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "project description: A good project description includes 'the what', 'the why', and 'the how'",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github", 
        available: false,
        url: "https://github.com/ancasimon?tab=projects",
        githubUrl: "https://github.com/ancasimon"
    },
    {
        title: "Project #3",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "project description: A good project description includes 'the what', 'the why', and 'the how'",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github", 
        available: true,
        url: "https://github.com/ancasimon?tab=projects",
        githubUrl: "https://github.com/ancasimon"
    }
];


createProjectCards = () => {
    let domString = '';
    for(i = 0; i < projects.length; i++) {
        if(projects[i].available === true) {
        domString += '<div class="project">';
        domString += `<h3 class="projectData">Project title: ${projects[i].title}</h3>`;
        domString += `<section class="projectData">${projects[i].screenshot}</section>`;
        domString += `<p class="projectData">What it is: ${projects[i].description}</p>`;
        domString += `<p class="projectData">What I used: ${projects[i].technologiesUsed}</p>`;
        domString += `<h5 class="projectData">Available yet? ${projects[i].available}</h5>`;
        domString += `<p class="projectData">Available here: ${projects[i].url}</p>`;
        domString += `<p class="projectData">My GitHub: ${projects[i].githubUrl}</p>`;
        domString += '</div>';
    };
    printToDom = (elementId, domString) => {
        const selectedDiv = document.getElementById(elementId);
        selectedDiv.innerHTML = domString;
    };
};
    printToDom('projectsPage', domString);
};

createProjectCards();