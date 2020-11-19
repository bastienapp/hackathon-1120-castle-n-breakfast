import axios from 'axios';

const API_URL =
  'https://raw.githubusercontent.com/bastienwcs/hackathon-1120-castle-n-breakfast/master/api.json';

export async function fetchCastles() {
  const response = await axios.get(API_URL);
  return response.data
    .filter((data) => {
      return data.fields.raison_sociale.includes('CHATEAU');
    })
    .map((data) => {
      return data.fields;
    });
}
