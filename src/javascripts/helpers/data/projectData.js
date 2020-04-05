import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allProjects = response.data;
      const projects = [];
      Object.keys(allProjects).forEach((projectId) => {
        allProjects[projectId].id = projectId;
        projects.push(allProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
