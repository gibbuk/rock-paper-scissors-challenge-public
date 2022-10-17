import { expect } from 'chai';
import sinon from 'sinon';

import Player from '../src/Player.js'


describe('Player class tests', () => {

    let testName, testPlayer;

    beforeEach(() => {
        testName = "Test Player"
        testPlayer = new Player(testName);
    })

    it(`it should have the name provided on construction`, () => {
        expect(testPlayer.getName()).to.equal(testName);
    })

    it(`should add a point to score`, () => {
        const score = testPlayer.getScore();
        testPlayer.addPoint();
        expect(testPlayer.getScore()).to.equal(score + 1);
    })

    it(`should set the currentMove to the value provided but lowercase`, () => {
        const testMove = "ROCK"
        expect(testPlayer.getCurrentMove()).to.equal(``);
        testPlayer.setCurrentMove(testMove);
        expect(testPlayer.getCurrentMove()).to.equal(testMove.toLowerCase());
    })

    it(`should make the player be AI controlled`, () => {
        testPlayer.makeAI();
        expect(testPlayer.getName()).to.equal(`AI controlled player ("HAL 9000")`);
        expect(testPlayer.isAI()).to.be.true;
    })

    it(`should set the currentMove to the expected value when provided with a mocked random number`, () => {
        const arrayOfOptions = ['rock', 'paper', 'scissors'];
        const randomStub = sinon.stub(Math, 'random')
        for (let i = 0; i < 3; i++) {
            randomStub.returns((i + 1 - 0.01) / arrayOfOptions.length);
            testPlayer.generateRandomMove();
            expect(testPlayer.getCurrentMove()).to.equal(arrayOfOptions[i]);
        }
    })

})