# SonarQube-FirstSteps
This repository is about how to use Sonarqube.

## Table of contents
1. Dockerfile
2. Config Sonarqube 
3. Explanation of configuration
4. Solve the issues 

## Dockerfile
Run the following command in a terminal in order to get, build and run the necessary dockerfile to deploy Soanrqube.  
```
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

## Config Sonarqube

Log in to http://localhost:9000 using System Administrator credentials:

- login: admin
- password: admin

To start the installation we should follow the next instructions:

- Click the Create new project button.
- Give your project a Project key and a Display name and click the Set Up button.
- Under Provide a token, select Generate a token. Give your token a name, click the Generate button, and click Continue.
- Select your project's main language under Run analysis on your project, and follow the instructions to analyze your project. 

## Run the image
In the third step we are going to run the the docker build image

## Run the image
In the third step we are going to run the the docker build image








