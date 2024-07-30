import express from 'express';
import cors from 'cors'; // Atualizado para importação ES Module
import countrys from './countryCodes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors({
  origin: '*', // Permite todas as origens
}));

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
    response.status(404).send(`Country: "${informedCountry.toUpperCase()}", not found!`);
    return;
  }
  response.status(200).send(filteredCountry);
});

app.get('/city/:city', (request, response) => {
  const informedCity = request.params.city.toLowerCase(); 
  const filteredCity = countrys.filter((cityObject) => cityObject.city.toLowerCase() == informedCity);

  if (filteredCity.length === 0) {
    response.status(404).send(`City: "${informedCity.toUpperCase()}", not found!`);
    return;
  }
  response.status(200).send(filteredCity);
}); 

app.listen(port, () => console.log(`Server running successfully on port: ${port}`));
