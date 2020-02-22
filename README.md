# NodeJs Pro via Docker - Microservices 

Simple Node.js Project to show how microservices architecture can be build and deployed on Docker

## Easy to start the app
```
docker-compose up
```
![getAllRestaurants](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-4.PNG)


- stop all the docker instances
```
docker-compose stop
```
![getAllRestaurants](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-5.PNG)


- If you have a problem about sharing local drives for dockers on windows, you can try this:
  Docker -> Settings -> Resources -> File Sharing
    If the checkbox is not clicked, click and Apply & Restart Docker

![Sharing volumes problem - win](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-1.PNG)


## Api tests on Postman:
### get All Restaurants Api

![getAllRestaurants](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-2.PNG)

### Post order Api

![postOrder](https://github.com/ramazansakin/NodeJs-App-Microservices/blob/master/SS/Capture-3.PNG)

