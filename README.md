# Research Square Company Code Challenge

This is a simple proof of concept web application that allows users to post an article and admin users to approve articles.

**Application Directory layout**
.
├── api
└── README.md

## Install

` 1. navigate to the /api directory`
`2. install dependencies`

     cd api
     npm install

## Run the app

     npm start

## Run the tests

_using postman:_

**Public route:** post a new article

     post http://localhost:5099/articles

     accepts the following JSON object...
      {
          "title": "string" //required,
          "authors": ["string"] //required,
          "article": "string" //required
          "abstract": "string" //required
     }

**Admin routes**: change article approved status

     get http://localhost:5099/articles
     put http://localhost:5099/article/id

     where **id** is required

# REST API

The REST API to the example app is described below.

## Get list of approved articles

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
                    "approved": true,
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
          "approved": false,
          "date": "3/1/2022"
     }

## Change approved status

### Request

`PUT /article/123`

    curl http://localhost:5099/article/123

    {
         "approved": true,
    }

### Response

    header 'Content-Type: application/json'
     data :{
          "id": "123"
          "title": "Super fun article",
          "authors": ["Jane Doe","John Doe" ],
          "abstract": "Articles are meant to be fun.",
          "article": "Articles are meant to be fun. \n That is why this one
          is so fun."
          "approved": true,
          "date": "3/1/2022"
          "approved_date": "3/2/2022"
     }
