# Time Zone Info API
The Time Zone Info API provides information about countries, their cities, and corresponding time zone details. Users can retrieve all data, or search for specific entries by ID, country, or city.

## Base URL
The base URL for accessing the API is: https://time-zone-info-api.vercel.app

## Endpoints

### Get All Data
Endpoint: `/`
Method: GET
Description: Returns a list of all countries with their respective details. 

**Example:**

```bash

curl -X GET https://time-zone-info-api.vercel.app/
```

**Response:** 

```json
[
  {
    "id": "1",
    "country_code": "US",
    "TZ_identifier": "America/New_York",
    "country": "United States",
    "city": "New York"
  },
  
] 
```
### Get Data by ID
Endpoint: `/id/:id`
Method: GET
Description: Returns the country details for a specific ID.
Parameters:

id: The ID of the country.

**Example:**

```bash 
curl -X GET https://time-zone-info-api.vercel.app/id/1
```
**Response (200):**
```json 
{
  "id": "1",
  "country_code": "US",
  "TZ_identifier": "America/New_York",
  "country": "United States",
  "city": "New York"
}
```

**Error Response (404):**
```bash
Id: "1", not found!
```

## Get Data by Country
Endpoint: `/country/:country`
Method: GET
Description: Returns all entries for a specific country.
Parameters:

country: The name of the country.

**Example:**

```bash

curl -X GET https://time-zone-info-api.vercel.app/country/brazil
```

**Response (200):** 
```json
[
  {
    "id": "2",
    "country_code": "BR",
    "TZ_identifier": "America/Sao_Paulo",
    "country": "Brazil",
    "city": "Sao Paulo"
  },
  
]
```
**Error Response (404):** 

```text
Country: "BRAZIL", not found!
```

## Get Data by City
Endpoint: `/city/:city`
Method: GET
Description: Returns all entries for a specific city.
Parameters:

city: The name of the city.

**Example:**

```bash

curl -X GET https://time-zone-info-api.vercel.app/city/sao paulo
```

**Response (200):**
```json  

[
  {
    "id": "2",
    "country_code": "BR",
    "TZ_identifier": "America/Sao_Paulo",
    "country": "Brazil",
    "city": "Sao Paulo"
  },
  
]
```

**Error Response (404):**

```text 
City: "SAO PAULO", not found!
```
**Setup**
Prerequisites

• Node.js installed
• npm installed

**Installation**

1.Clone the repository:

```bash
git clone <https://github.com/Emerson602/time-zone-info-api.git>
cd <time-zone-info-api>
```

2.Install dependencies:

```bash
npm install
npm install express 
npm install cors
npm install -g nodemon
```
3.Start the server:

```bash
npm run dev
```
4.The server will be running on port 3000 by default. You can access it at http://localhost:3000.

## Example Requests
### Get All Data
```bash

curl -X GET https://time-zone-info-api.vercel.app/
```
### Get Data by ID
```bash

curl -X GET https://time-zone-info-api.vercel.app/id/1
```
### Get Data by Country
```bash

curl -X GET https://time-zone-info-api.vercel.app/country/brazil
```
### Get Data by City
```bash

curl -X GET https://time-zone-info-api.vercel.app/city/sao paulo
```
### Author
Wemerson Nicacio



