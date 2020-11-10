import express, { response } from 'express';
const router
const router = express.Router();

router.get("/", (require, response)) => {
    response.render("index", {title: "Ejemplo de realidad aumentada"});


}

module.exports = router;