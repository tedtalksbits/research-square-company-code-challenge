![logo](https://uploads-ssl.webflow.com/5f3420025b90061b5a79e42e/5f4d114e0536dc4e82e0162f_rs-logo-company.svg)

# Research Square Company Code Challenge

This is a simple proof of concept web application that allows users to post an article and admin users to approve articles.

**Application Directory layout**
─ API
─ client
─ README.md

# Backend Getting Started

[Frontend Getting Started](./client/README.md)

## Install

1. navigate to the /api directory`
2. install dependencies`

```shell
cd api
npm install
```

## Startup server

```shell
npm start
```

You should see a message like this:
![screenshot terminal](https://i.imgur.com/zrVHqCp.png)

## Run the tests

_using postman:_

**Public route:** post a new article

     POST: http://localhost:5099/articles

     accepts the following JSON object...
      {
          "title": "string" //required,
          "authors": ["string"] //required,
          "article": "string" //required
          "abstract": "string" //not required
     }

**Admin routes**: change article approved status

     GET: http://localhost:5099/articles
     PUT: http://localhost:5099/article/id

     where 'id' is required

# REST API

The REST API to the example app is described below.

## Get the list of approved articles

### Request

`GET /api/articles`

    curl  http://localhost:5099/articles/

### Response

     {
          status: "ok",
          data:[
               {
                    "id": 1,
                    "title": "Super fun article",
                    "authors": ["Jane Doe","John Doe" ],
                    "abstract": "Articles are meant to be fun.",
                    "article": "Articles are meant to be fun. \n That is why this one
                    is so fun."
                    "status": "approved",
                    "date": "3/15/2022"
               }
          ]
     }

## Submit a new article

### Request

`POST /articles`

    curl http://localhost:5099/article

    {
         "title": "Super fun article",
          "authors": ["Jane Doe","John Doe" ],
          "abstract": "Articles are meant to be fun.",
          "article": "Articles are meant to be fun. \n That is why this one
          is so fun."
    }

### Response

    header 'Content-Type: application/json'
     data:{
          id: "123",
          "title": "Super fun article",
          "authors": ["Jane Doe","John Doe" ],
          "abstract": "Articles are meant to be fun.",
          "article": "Articles are meant to be fun. \n That is why this one
          is so fun."
          "status": "pending",
          "date": "3/1/2022"
     }

## Change approved status

### Request

`PUT /article/123`

    curl http://localhost:5099/article/123

    {
         "status": "pending"
    }

> The status property accepts the following string: **"pending"** || **"approved"** || **"disapproved"**

### Response

    header 'Content-Type: application/json'
     data :{
          "id": "123"
          "title": "Super fun article",
          "authors": ["Jane Doe","John Doe" ],
          "abstract": "Articles are meant to be fun.",
          "article": "Articles are meant to be fun. \n That is why this one
          is so fun."
          "status": "pending",
          "date": "3/1/2022"
          "approved_date": "3/2/2022"
     }

## Built with

- NodeJS
- ExpressJS

**Dependencies**

- <a href="https://nodemon.io/">nodemon</a> // a utility that monitor for any changes in your source and automatically restart your server.
- <a href="https://github.com/uuidjs/uuid#readme">UUID</a> //generate unique ids

# Frontend Getting Started

[How to run app locally](./client/README.md)
