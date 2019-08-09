const app = require('./index');

app.get('/test', async (req, res) => {
    res.send({message: 'pass!'});
});

app.listen(3333);