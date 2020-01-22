console.log("Hi Simon Projects Page");

const projects = [
    {
        title: "Cool Project",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "project description: A good project description includes 'the what', 'the why', and 'the how'",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github", 
        available: true,
        url: "https://github.com/ancasimon?tab=projects",
        gitHubUrl: "https://github.com/ancasimon"
    },
    {
        title: "Project #2",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "project description: A good project description includes 'the what', 'the why', and 'the how'",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github", 
        available: false,
        url: "https://github.com/ancasimon?tab=projects",
        gitHubUrl: "https://github.com/ancasimon"
    },
    {
        title: "Project #3",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "project description: A good project description includes 'the what', 'the why', and 'the how'",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github", 
        available: true,
        url: "https://github.com/ancasimon?tab=projects",
        gitHubUrl: "https://github.com/ancasimon"
    }
];

printToDom = (elementId, textToPrint) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = textToPrint;
};

createProjectCards = () => {
    let domString = '';
    for(i = 0; i < projects.length; i++) {
        if(projects[i].available === true) {
        domString += '<div class="project">';
        domString += `<h3>Project title: ${projects[i].title}</h3>`;
        domString += `<section>${projects[i].screenshot}</section>`;
        domString += `<p>What it is: ${projects[i].description}</p>`;
        domString += `<p>What I used: ${projects[i].technologiesUsed}</p>`;
        domString += `<h5>Available yet? ${projects[i].available}</h5>`;
        domString += `<p>Available here: ${projects[i].url}</p>`;
        domString += `<p>My GitHub: ${projects[i].gitHubUrl}</p>`;
        domString += '</div>';
    }
};
    printToDom('projectsPage', domString);
};

createProjectCards();