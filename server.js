const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const lessMiddleware = require('less-middleware');

const routes = require('./routes/handlers');

app.use(lessMiddleware('/styles', {
    dest: '/styles',
    pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts/main')
});

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Configure Routes
app.use('/', routes);

app.listen(3000);