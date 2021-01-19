# Toy Robot Simulation CLI Application
Toy robot is a simple coding challenge given by REA Group to assess programmer’s coding skills. The purpose of this document is to provide documentation to improve understandability of the task completed.

# System Requirements:
* Mac OS, Windows, Linux <br/>
* Node 14+ <br/>
* NPM v6.14.1 <br/>

We have to follow below mentioned steps to run this application.

### Dependencies Installation:
npm install

### Executing Application:
npm run start

### Test case execution:
npm run test

### Test Case Coverage Report
npm run coverageReport

## Packages Details:
There are three main packages are used to accomplish my task and used eslint to improve coding styles which I will explain below too.

### Vorpal (1.12.0)
As per problem statement it was required to create a command line application and vorpal is used to create CLI applications with simple and powerful API. We can find its full documentation from below link.
**https://www.npmjs.com/package/vorpal** 

### Jest (26.6.3):
Jest is a simple framework to perform unit testing, it is simple to install. There is complete documentation available as its official documentation. Link is given below.
**https://jestjs.io/docs/en/getting-started**

It required very few configurations in its jest.config.js to run like

#### testEnvironment: 
We need to provide in which environment we have to run these test cases.

#### clearMocks:
In unit tests we use mocks and we have to clear previous test mocks for running next test case to get more accurate results which is not effected by the previous state.

#### coverageDirectory:
This is the directory path where we will put all of the test cases coverage data when we will run “npm run coverage | yarn run coverage”.

I tried to cover most of the parts of the application but 

### Chalk (4.1.0):
Chalk package is used to provide interactive and colourful logging interaction. We can use wide range on colour from text to background and selecting colour families as well.

In this small project I used red and blue colours only. Installation and further documentation can be get from the below link.
**https://www.npmjs.com/package/chalk**

### ESLint (7.18.0):
Eslint is a package which helps us to make our code as per defined standards. These standards can be defined by each organization differently but I used coding standards set by tech giant Airbnb by extending **airbnb-base** 

## Basic Application CLI Commands
After executing application using **npm run start** , we can use application by using below mentioned commands as set of instructions

PLACE 0,0,NORTH <br/>
MOVE <br/>
REPORT <br/>

PLACE 0,0,NORTH <br/>
MOVE <br/>
LEFT <br/>
RIGHT <br/>
REPORT <br/>

We have four facing directions like (EAST, WEST, NORTH, SOUTH) and these directions we can use to place robot with [X] , [Y] coordinates like

PLACE 0,0,EAST

After PLACE command we can use LEFT, RIGHT, MOVE and REPORT commands. REPORT will issue a current position of the robot where it is positioned currently.

PLACE command with its coordinates and direction is required as first command.