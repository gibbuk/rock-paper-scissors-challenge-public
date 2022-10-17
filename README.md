# RPS Challenge

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project was one of the technical assignments in the Digital Futures Academy programme aw was undertaken between 2nd and 7th August 2022.

The project was to implement a backend server that ran a Rock-Paper-Scissors game for a player. The server was also responsible for generating and providing the HTML presentational layer for the player to interact with.

The projects purpose was to demonstrate my ability to implement a backend server that would comply with OOD principles and provide logic and routes to provide the functionality.

## Built With
The core server implementation was NodeJS with Express (web framework) and dotenv (environment variable loading). EJS was also used to provide embedded JavaScript templates that could be provided by the server.

Testing was implemented using the Mocha framework with chai, chai-http and chai-spies as assertion library and relevant extension. Sinon was also used for stubbing.

## Getting Started

Clone the project and then from the project root directory:

1. Install the dependencies 
```
$ npm i
```
2. Run tests:
```
$ npm test     
```
3. Run the server
```
$ npm start    
```
4. Using web browser, navigate to the localhost address/port provided in the server console.

## Problem Statements

This was a technical assignment I undertook as part of the Digital Futures Academy programme. The project was to implement a backend server that ran a Rock-Paper-Scissors game for a player.

The original user stories and requirements can be found in the file [./ChallengeNotes.md](./ChallengeNotes.md).

Prior to coding I worked through decomposing the stories, diagrammatically mapping the routes and views and summarising through domain modelling. The outcomes of this process are recorded in the following markdown: [User Story Domain Model](./UserStoryDomainModel.md).

## Project Review and Roadmap
My key overall learning from this project:
- The process of visually mapping the routes through the server/different states of the system were extremely valuable to me. They provided additional context that supported my breakdown of the components required by the system and their functionality as part of my domain modelling.

My technical learnings from this project:
- Implementing a NodeJS server using the Express framework including use of `App.locals` variables to hold the game's state and the use of GET and POST request routes to allow the player to interact with the server.
- Using EJS templates to allow the server to generate complete HTTP based on the system state to be provided to the user.
- The Mocha testing framework and associated assertion libraries and plugins (chai-http, chai-spies, sinon). 
- Using stubbing to mock function call results to allow ensure control of the testing scenario.

Improvements/additional features that could be included:
- The server implementation could be amended in such a way to allow the server `app.test.js` tests to hold the server open until a closed signal is received. This would allow the tests to directly interrogate `App.local` variables and allow for tests that could provide additional assurance as to the behaviour of the server.
- Add a new class of object `hands` that could be stored by the player objects. This would be more aligned with OOD principles and support greater code extensibility such as the ability to add additional moves and how different hands were scored against each other.
- The code within the scoring algorithm could be changed to improve readability by moving away from the form `if (p1Move === "rock" && p2Move === "scissors" || ...` to e.g. 

```js
const gameRules = { rock: `scissors`, scissors: `paper`, paper: `rock` } 
// then inside the score method 
if(gameRules[p1Move] === p2Move) { this.#players[0].addPoint(); return `Player 1 won the round!` } 
if(gameRules[p2Move] === p1Move) { this.#players[1].addPoint(); return `Player 2 won the round!` } 
return `Draw`
```

## Acknowledgments
- Advice and guidance was provided by Digital Futures Academy Trainers Ed Wright and Lucas Chagas at various points throughout the project. 

