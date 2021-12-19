import express from 'express';
const app = express();

app.use(express.static(__dirname + "/public"))
app.set('views', './src');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

export { app };