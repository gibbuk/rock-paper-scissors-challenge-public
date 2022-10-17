import express from "express";
import GameManager from "../src/GameManager.js";

export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        if (!req.body.player1) {
            res.status(400).send("Error: req.body was empty")
        } else {
            const gameManager = new GameManager();
            const names = [req.body.player1];
            gameManager.setup(names);
            req.app.locals.gameManager = gameManager;

            res.redirect(302, `/game`);
        }


    })

    .get((req, res) => {
        const player1 = req.app.locals.gameManager.getPlayers()[0];
        res.render('game', { name: player1.getName() })
    })