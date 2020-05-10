import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const allTechnologies = response.data;
      const technologies = [];
      Object.keys(allTechnologies).forEach((technologyId) => {
        allTechnologies[technologyId].id = technologyId;
        technologies.push(allTechnologies[technologyId]);
      });
      resolve(technologies);
    })
    .catch((err) => reject(err));
});

export default { getTechnologies };
