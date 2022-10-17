class Player {

    #ai = false;
    #currentMove = '';
    #name = '';
    #score = 0;

    constructor(name) { this.#name = name };

    isAI() { return this.#ai }

    makeAI() {
        this.#name = `AI controlled player ("HAL 9000")`;
        this.#ai = true;
    };

    getCurrentMove() { return this.#currentMove; }

    setCurrentMove(move) { this.#currentMove = move.toLowerCase(); };

    generateRandomMove() {
        const moves = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random() * moves.length);
        this.setCurrentMove(moves[random])
    };

    getName() { return this.#name; }

    addPoint() { this.#score += 1; }

    getScore() { return this.#score; }


}

export default Player;