const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', async (req, res) => {
    const productos = await pool.query('SELECT * FROM Producto');
    res.render('index', { productos });
});


module.exports = router;