import express from 'express';

var app = express();

app.post('/api/please', (req, res) => {
    res.status(200).send({ msg: 'Thank you!' });
});

app.listen(3001, () => {
    console.log('Server listening on port 3001.');
});