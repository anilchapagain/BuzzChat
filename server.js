'use strict';
const express = require ('express');
const app = express();
const buzzChat = require('./app');
const passport = require('passport');
const title = 'BuzzChat';


app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(buzzChat.session);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', buzzChat.router);





app.listen(app.get('port'), () => {
    console.log('BuzzChat Running on port : ', app.get('port'));
});