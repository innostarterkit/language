# Backend with Node js and Express 

This Backend is made from this
[guide](https://expressjs.com/en/starter/basic-routing.html)
and this [guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## Installation

```
$ npm install
```
## Running Locally

```
$ npm start

Set env GCLOUD_PROJECT=xxxx
Set env GOOGLE_APPLICATION_CREDENTIALS=/usr/src/app/gcpkey.json
```


## [Docker] Build image

```
$ docker build -t eu.gcr.io/projectid-xxxxx/javascript-backend . 
```
## Running Locally

```
$  docker run -p 3000:3000 eu.gcr.io/projectid-xxxxx/javascript-backend .      
```

go to http://localhost:3000

## Push on google cloud

```
$  docker push eu.gcr.io/projectid-xxxxx/javascript-backend .      
```
