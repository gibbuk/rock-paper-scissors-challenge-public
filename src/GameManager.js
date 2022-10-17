import Player from "./Player.js";

class GameManager {

    #players = [];

    setup(players, playerTemplate = Player) {
        this.#players = players.map(player => new playerTemplate(player))
        if (this.#players.length === 1) {
            this.#players = [...this.#players, new playerTemplate("player2")];
            this.makePlayer2AI();
        }
    }

    getPlayers() { return this.#players }

    makePlayer2AI() { this.#players[1].makeAI() }

    playAI() { this.#players[1].generateRandomMove() }

    recordMove(move) { this.#players[0].setCurrentMove(move) };

    score() {
        const p1Move = this.#players[0].getCurrentMove();
        const p2Move = this.#players[1].getCurrentMove();
        if (p1Move === "rock" && p2Move === "scissors" || p1Move === "paper" && p2Move === "rock" || p1Move === "scissors" && p2Move === "paper") {
            this.#players[0].addPoint();
            return `player1 won the round!`
        };
        if (p2Move === "rock" && p1Move === "scissors" || p2Move === "paper" && p1Move === "rock" || p2Move === "scissors" && p1Move === "paper") {
            this.#players[1].addPoint();
            return `player2 won the round!`
        }
        return `This round was a draw - no winner!`

    }
}

export default GameManager;