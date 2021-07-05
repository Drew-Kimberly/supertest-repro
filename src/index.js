const app = require('./app');
const port = 3100;

app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});
