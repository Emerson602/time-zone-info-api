import countrys from './countryCodes.js';  
import express from 'express';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/', (request, response) => {   
  try {
    response.status(200).send(countrys);
  } catch (error) {
    console.log(error);
    response.status(500).send('Internal Server Error'); 
  }
}); 

app.get('/id/:id', (request, response) => {
  const informedId = request.params.id;
  const idFound = countrys.find((idObject) => idObject.id == informedId);
  
  if (!idFound) {
    response.status(404).send(`Id: "${informedId}", not found!`);
    return;
  }
  response.status(200).send(idFound);
});

app.get('/country/:country', (request, response) => {
  const informedCountry = request.params.country.toLowerCase();  
  const filteredCountry = countrys.filter((countryObject) => countryObject.country.toLowerCase() == informedCountry);

  if (filteredCountry.length === 0) {  
    response.status(404).send(`Country: "${informedCountry.toLocaleUpperCase()}", not found!`);
    return;
  }
  response.status(200).send(filteredCountry);
});

app.get('/city/:city', (request, response) => {
  const informedCity = request.params.city.toLowerCase(); 
  const filteredCity = countrys.filter((cityObject) => cityObject.city.toLowerCase() == informedCity);

  if (filteredCity.length === 0) {
    response.status(404).send(`City: "${informedCity.toLocaleUpperCase()}", not found!`);
    return;
  }
  response.status(200).send(filteredCity);
}); 


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running successfully on port: ${port}`));
