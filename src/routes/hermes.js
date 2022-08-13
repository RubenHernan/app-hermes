const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('hermes/add');
});

router.get('/shoping-cart', (req, res) => {
    res.render('shoping-cart');
});

router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO Producto set ?', [newLink]);
    req.flash('success', 'Link Saved Successfully');
    res.redirect('/hermes');
});

module.exports = router;