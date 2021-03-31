import express from 'express';
import twig from 'twig';

const app = express();

app.use('/static', express.static('static'));

app.set('views', 'templates');
app.set('view engine', 'html');
app.engine('html', twig.__express);

app.listen(3000, () => {
    console.log("Server ready");
});

app.get('/', (req, res) => res.render('index.html', {
    missions: [{
        id: 0,
        name: "Test 1",
        map: "Map",
        date: "00/00/0000",
        signed: 0,
        max: 0
    }, {
        id: 1,
        name: "Test 2",
        map: "Map",
        date: "00/00/0000",
        signed: 0,
        max: 0
    }]
}))