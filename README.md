# API Server

**Author**: Brooke Heck

**Version**: 1.0.0

## Overview
This is a REST api that takes requests from a client and queries a SQL database based on that request. The backend server is built with express and receives HTTP requests. See deployed server information for methods and routes.

## Deployed Server
[https://brookeh-api-server.herokuapp.com](https://brookeh-api-server.herokuapp.com/)

### Routes

***FOOD***

GET : /food

GET : /food/:id

POST : /food (body {"name" : "food name", "price": 1})

PUT : /food/:id (body {"name" : "updated food name", "price": 2})

DELETE: /food/:id

***CLOTHES***

GET : /clothes

GET : /clothes/:id

POST : /clothes (body {"name" : "clothes name", "price": 1})

PUT : /clothes/:id (body {"name" : "updated clothes name", "price": 2})

DELETE: /clothes/:id


## Architecture
This is only the backend server and is created using express. This is only a practice server so the database is a nonpersistent database created with sequelizer. Models for the database can be found in the src/models. The models are passed to an instance of Collection, and this is where all database queries are made.

## Change Log
09-22-2022 2:25pm - Fully working REST api that uses SQL to get, create, update, and delete records in a database