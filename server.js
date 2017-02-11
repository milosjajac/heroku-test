import bodyParser from 'body-parser';
import express from 'express';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/api/please', (req, res) => {
    res.status(200).send({ msg: 'Thank you!' });
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server listening on port ' + process.env.PORT + ' (or 3001)');
});