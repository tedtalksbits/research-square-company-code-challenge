# Research Square Company Code Challenge

At Research Square Company we receive articles from researchers to be published as a preprint. Before publishing their article, it must be approved by an admin.

This is a simple proof of concept web application to test this concept.

**Application Directory layout**
.
├── api
├── client
└── README.md

## Install

    npm install

## Run the app

## Run the tests

_using postman_

# REST API

The REST API to the example app is described below.

## Get list of approved articles

### Request

`GET /api/articles`

    curl  http://localhost:5099/articles/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

## Submit a new article

### Request

`POST /article/`

    curl http://localhost:5099/article

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}
