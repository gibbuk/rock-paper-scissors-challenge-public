# User stories and Domain Model documentation

Prior to coding I worked through decomposing the stories, diagrammatically mapping the routes and views and summarising through domain modelling. The outcomes of this process are recorded below.

## User Stories decomposed
The user stories provided have been decomposed further to provide richer detail of the requirements and Domain Modelling.

### Core requirement stories:

```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

### Decomposed stories:

```
As the player,
I want the game to provide a form so that I can give my name,
so that the game knows who I am.

As the player,
I want the game to provide options Rock, Paper, Scissors that I can submit each turn,
so that I can play the game.

As the player,
I want the game to generate a random option (Rock, Paper, Scissors) every turn ,
so that that I have something to play against.

As the player,
I want the game to evaluate each turn whether I or the game won,
so that I don't have to do it myself.

As the game,
I want to keep track of the player and game score,
so that I can display this to the player

As the game,
After each turn I want to display the round results,
so the player knows who won the round.

As the player,
I want the game to display the total score between turns,
so that I can know who is winning.

As the game,
I want to keep track of the score,
so that I can display this to the player.

As the game,
I want a server listening to the player's selection,
so that I can receive the player's submissions.

As the server,
I want to be able to populate information into ejs views,
so that I can display updated information.

As the server,
I want to be able to listen to different route requests using Express,
so that I can serve the right information.

As the server,
I want to use EJS view engine, 
so that routes can pass changing information into different views.

As the index route,
I want to be able to receive a get request,
so that I can serve an index view.

As the game route,
I want to be able to receive a post request with a player information (such as name),
so I can start the game.

As the game route,
I want to set up a gameManager object in app.local when receiving a post request,
so that the state of game is stored.

As the game route,
I want to be able to receive get requests that pass me the Express App.local information,
so that I can serve the game view.

As the End of Round route,
I want to receive a post request with the necessary information (app.local and player choice),
so that I can take actions to update the game state.

As the End of Round route,
I want to be able to tell the gameManager to make the AI controlled player's choice,
so that end of round result can be calculated.

As the End of Round Route,
I want to be able to tell the gameManager to score the round,
so that I can have information to serve in an End of Round view.

As the End of Round route,
I want to be able to serve an End of Round view with up to date game information
so that the player can see the result of their actions.

As the index view,
I want to be able to submit a form with a player name to the game route,
so that the game can be started.

As the game view,
I want to display the players name,
so that I can instruct them to pick an action.

As the game view,
I want the player to be able to pick and submit an option ("rock", "paper" or "scissors") to the End of Round route,
so that the outcome of the player's actions can be determined.

As the End of Round View,
I want to display the actions players have taken, who won the round and the end scores,
so that the player can know the outcome of their actions.

As the end of round view,
I want to provide a link to the game route get request that the player can click on ,
so that they can continue to play if they want.

As the gameManager object,
I want to setup the Players playing the game,
so that I know who is playing.

As the gameManager object,
I want to be able to update the Players' score
so that progress is recorded.

As a gameManager,
I want to make a second AI controlled player if there is only one human playing,
so that the human has someone to play against.

As the gameManager object,
I want to be able to update the Players' moves,
so that we know who did what.

As the gameManager object,
I want to be able to compare the Player's moves,
so that I can assign a score.

As the gameManager object,
I want to know if a Player is AI controlled,
so that I can instruct it to take its moves.

As a Player object,
I want to store my name, score and last move taken,
so that I provide or use this information.

As a Player object,
I want to be able to add a point to my score,
so that I I can keep track of my wins.

As a Player object,
I want to know if I am AI controlled,
so that the gameManager can respond to this.

As a Player object,
I want to be able to generate a random choice to store in last move,
so that this can be used if I am AI controlled.
```

## Route mapping
The following diagram was generated to provide a map of the routes to the views and the actions needing to be taken and information needed by the views to successfully render.

![Route map diagram](./images/Routes-map-diagram.jpg)

## Domain modelling
I used the decomposed stories and route map to generate a domain model to summarise what was needed by each part of the system. 

![Domain model page 1](./images/Domain-model-pg1.jpg)
![Domain model page 2](./images/Domain-model-pg2.jpg)
![Domain model page 3](./images/Domain-model-pg3.jpg)
