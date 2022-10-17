import chai from 'chai';
import { expect } from 'chai';
import spies from 'chai-spies';
import sinon from 'sinon';

import GameManager from '../src/GameManager.js';

chai.use(spies);

describe(`GameManager tests -`, () => {

    let gameManager, players;

    beforeEach(() => {
        gameManager = new GameManager();
        players = ["player1", "player2"];
        gameManager.setup(players)
    })

    describe(`setup() tests`, () => {

        it(`players[] should have a length of 2 if two player names passed to it`, () => {
            expect(gameManager.getPlayers().length).to.equal(players.length);
        })

        it(`players[] should contain player objects with the expected names`, () => {
            const result = gameManager.getPlayers();
            for (let i = 0, n = players.length; i < n; i++) {
                expect(result[i].constructor.name).to.equal("Player");
                expect(result[i].getName()).to.equal(players[i]);
            }
        })

        it(`players[] should still have length 1 even if only one player passed to it`, () => {
            const onePlayerOnly = ["player1"]
            const onePlayerGame = new GameManager();
            onePlayerGame.setup(onePlayerOnly);
            expect(onePlayerGame.getPlayers().length).to.equal(2);
        })

        it(`player2 should be AI after only one player passed to it`, () => {
            const onePlayerOnly = ["player1"]
            const onePlayerGame = new GameManager();
            onePlayerGame.setup(onePlayerOnly);
            const player2 = onePlayerGame.getPlayers()[1];

            expect(player2.getName()).to.equal(`AI controlled player ("HAL 9000")`);
            expect(player2.isAI()).to.be.true;
        })
    })

    describe(`tests for functions that call actions on players`, () => {
        it(`should make player2 AI controlled`, () => {
            gameManager.makePlayer2AI();
            expect(gameManager.getPlayers()[1].isAI()).to.be.true;
        })

        it(`should call setCurrentMove on player1 with the input`, () => {
            const recordMoveSpy = chai.spy.on(gameManager.getPlayers()[0], 'setCurrentMove');
            const testMove = `rock`;
            gameManager.recordMove(testMove);
            expect(recordMoveSpy).to.have.been.called(1);
            expect(recordMoveSpy).to.have.been.called.with(testMove);
        })

        it(`should call generateRandomMove() on player2`, () => {
            const spy = chai.spy.on(gameManager.getPlayers()[1], 'generateRandomMove');
            gameManager.playAI()
            expect(spy).to.have.been.called.once;
        })
    })


    describe(`score() tests`, () => {

        let player2MoveStub;
        let player1Spy, player2Spy;
        let possibleMoves;

        beforeEach(() => {
            player2MoveStub = sinon.stub(gameManager.getPlayers()[1], 'getCurrentMove')
            possibleMoves = ['rock', 'paper', 'scissors'];
        })

        it(`it should return 'player1 won the round!' and addPoint to have been called on player1, not player2`, () => {
            const p1Spy = chai.spy.on(gameManager.getPlayers()[0], 'addPoint');
            const p2Spy = chai.spy.on(gameManager.getPlayers()[1], 'addPoint');

            for (let i = 0, n = possibleMoves.length; i < n; i++) {
                gameManager.recordMove(possibleMoves[i]);
                player2MoveStub.returns(possibleMoves[(i + 2) % possibleMoves.length]);
                const result = gameManager.score();
                expect(result).to.equal("player1 won the round!");
                expect(p1Spy).to.have.been.called(i + 1);
                expect(p2Spy).to.not.have.been.called();

            }
        })

        it(`it should return 'player2 won the round!'`, () => {
            const p1Spy = chai.spy.on(gameManager.getPlayers()[0], 'addPoint');
            const p2Spy = chai.spy.on(gameManager.getPlayers()[1], 'addPoint');

            for (let i = 0, n = possibleMoves.length; i < n; i++) {
                gameManager.recordMove(possibleMoves[i]);
                player2MoveStub.returns(possibleMoves[(i + 1) % possibleMoves.length]);
                const result = gameManager.score();
                expect(result).to.equal("player2 won the round!")
                expect(p1Spy).to.not.have.been.called();
                expect(p2Spy).to.have.been.called(i + 1);
            }

        })

        it(`it should return 'This round was a draw - no winner!' and not call addPoints on either player`, () => {
            const p1Spy = chai.spy.on(gameManager.getPlayers()[0], 'addPoint');
            const p2Spy = chai.spy.on(gameManager.getPlayers()[1], 'addPoint');

            for (let i = 0, n = possibleMoves.length; i < n; i++) {
                gameManager.recordMove(possibleMoves[i]);
                player2MoveStub.returns(possibleMoves[i]);
                const result = gameManager.score();
                expect(result).to.equal("This round was a draw - no winner!")
                expect(p1Spy).to.not.have.been.called();
                expect(p2Spy).to.not.have.been.called();
            }
        })

    })
})