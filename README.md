## pet-catalog-frontend

The Client app displays an pet list with and pet detail pages.

- Pets information \_name, status, categories & and tags are show in the list.
- Search pets by _tags_ on the client.
- Pet details on the route of the respective pet with information along with image .

## pet-catalog-service

The backend app provides api's for pets, users & store.

- api's results are exposed via REST endpoints ([pet store](https://editor.swagger.io/?url=https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml))

### Build setup

docker-compose up —build

[http://localhost:4000](http://localhost:4000/) pet-catalog-frontend.

[http://localhost:3000](http://localhost:3000/v1) pet-catalog api's.

create .env file for mongodb with connection url.

local.env 
  `DB_connection=mongodb://mongo:27017
  ...`

more information in readme.md of pet-catalog-frontend & pet-catalog-service.
