import express from "express";

export const router = express.Router();

router.route(`/`)
    .get((req, res) => {
        res.status(200).render('index');

    })