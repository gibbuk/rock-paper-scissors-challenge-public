import express from "express";

export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const gameManager = req.app.locals.gameManager;
        gameManager.recordMove(req.body.playerMove);
        gameManager.playAI()
        const result = gameManager.score();

        const player1 = gameManager.getPlayers()[0];
        const player2 = gameManager.getPlayers()[1];

        res.render('endofround', {
            player1: player1,
            player2: player2,
            result: result
        })
    })