# NodeJs Project via Docker - Microservices 

Simple Node.js Project to show how microservices architecture can be built and deployed on Docker.

## Easy to start & stop the app

- Start all services by the following command:
```bash
docker-compose up
```

![getAllRestaurants](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-4.PNG)

- Stop & remove all the docker instances by the following command:

```bash
docker-compose stop
```

![getAllRestaurants](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-5.PNG)


- If you have a problem about sharing local drives for dockers on windows, you can try this:
*Docker* -> *Settings* -> *Resources* -> *File Sharing* 
If the checkbox is not clicked, click and Apply & Restart Docker

[Problem solved - Stackoverflow ](https://stackoverflow.com/questions/44099509/error-while-sharing-local-drivevolume-with-docker-for-windows)
![Sharing volumes problem - win](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-1.PNG)


## Api tests on Postman:
### Get all restaurants api

![getAllRestaurants](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-2.PNG)

### Post an order api

![postOrder](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-3.PNG)

