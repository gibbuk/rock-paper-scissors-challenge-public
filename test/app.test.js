import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import spies from 'chai-spies';

import server from '../app.js';

chai.use(chaiHttp);
chai.use(spies);

describe(`Server tests`, () => {

    describe(`index "/" route tests`, () => {

        it(`/GET test - it should return an html file that includes "Welcome to the Rock Paper Scissors game!"`, async () => {
            const res = await chai.request(server)
                .get(`/`)
                .send();

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.contain("Welcome to the Rock Paper Scissors game!");

        })
    })

    describe(`/game route test`, () => {

        it(`POST test "/game" - on receiving a post request with no information should return an error`, async () => {
            const res = await chai.request(server)
                .post(`/game`)
                .send();

            expect(res.text).to.contain("Error: req.body was empty");
        });


        it(`POST test "/game" - should return 200 status and html`, async () => {
            const data = { player1: "test" }
            const res = await chai.request(server)
                .post(`/game`)
                .type('form')
                .send(data);

            expect(res).to.have.status(200);
            expect(res).to.be.html;
        })

        it(`GET test "/game" - it should return an html file that includes "choose your move!"`, async () => {
            const res = await chai.request(server)
                .get(`/game`)
                .send();

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.contain("choose your move!");
        })

        describe(`/game route test`, () => {

            it(`POST test "/endofround" it should return an html file that includes "The total scores for the game are"`, async () => {
                const res = await chai.request(server)
                    .post(`/endofround`)
                    .type('form')
                    .send({ playerMove: "rock" })

                expect(res).to.be.html;
                expect(res).to.have.status(200);
                expect(res.text).to.contain("The total scores for the game are")
            })

        })

    })

})
