'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    logger          = require('morgan'),
    // _               = require('lodash'),
    // session         = require('express-session'),
    // mongoose        = require('mongoose'),
    // mongo           = require('mongodb'),
    pug             = require('pug');


let app = express();
// app.use(logger('dev', {
//     skip: function(req, res) { return !req.url.startsWith('/v1') }
// }));
app.use(bodyParser.json({}));
app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');
app.use(bodyParser.urlencoded({ extended: true }));
let staticPath = path.join(__dirname, '../../public');
app.use(express.static(staticPath));
app.use(logger('combined'));

// mongoose.connect('mongodb://localhost:27017/kanaiym');
// let models = require('./models/user');
// let User = models.User;
// let Game = require('./models/game');

// app.get('/profile.html', function (req, res) {
//     let username = req.params.username;
//     if (!username) {
//         username = req.session.username;
//     }
//     console.log('params',username);
//     console.log('body',req.body);
//     if (username) {
//         console.log('found username', username);
//         User.where({ username: username.toLowerCase() }).findOne( function(err, doc) {
//             if (err) {
//                 alert('Unknown user');
//                 res.render('profile');
//             } else {
//                 res.render('profile', {username: doc.username, first_name: doc.first_name, last_name: doc.last_name, primary_email: doc.primary_email});
//             }
//         });
//     }
// });

// app.get('/review.html', function (req, res) {
//     let gameID = 0;
//     gameID = req.params.id;
//     Game.where({ _id: gameID }).findOne( function(err, doc) {
//         if (err) {
//             alert('Unknown game');
//         } else {
//             res.render('review', {players: doc.players, start_date: doc.start_date, end_date: doc.end_date,
//                 creator: doc.creator, turn: doc.turn, state: doc.state, type: doc.type, deck: doc.deck});
//         }
//     });
// });

// // Handle POST to create a user session
// app.post('/v1/session', function(req, res) {
//     if (!req.body || !req.body.username || !req.body.password) {
//         res.status(400).send({ error: 'username and password required' });
//     } else {
//         let user;
//         User.where({ username: req.body.username.toLowerCase() }).findOne( function (err, doc) {
//             if (err) {
//                 console.log(err);
//                 res.status(400).send({error: 'error searching database for user'});
//             } else {
//                 if (doc) {
//                     user = doc;
//                     let hashedEntry = models.passwordHashing(req.body.password, user.salt).password;
//                     console.log('login attempt', req.body.password);
//                     console.log('login attempt hashed', hashedEntry);
//                     if (!user || user.password !== hashedEntry) {
//                         if (user) console.log('It the password: ' + user.password + ' vs. ' + req.body.password);
//                         else console.log('Invalid username/password');
//                         res.status(401).send({ error: 'unauthorized' });
//                     } else {
//                         req.session.username = user.username;
//                         res.status(201).send({
//                             username:       user.username,
//                             primary_email:  user.primary_email
//                         });
//                     }
//                 } else {
//                     res.status(400).send({error: 'invalid username'});
//                 }
//             }
//         });
//     }
// });

// // Handle POST to create a new user account
// app.post('/v1/user', function(req, res) {
//     let data = req.body;
//     console.log('post to /v1/user req.body', data);
//     if (!data || !data.username || !data.password || !data.first_name || !data.last_name || !data.primary_email) {
//         console.log('username, password, first_name, last_name and primary_email required');
//         res.status(400).send({ error: 'username, password, first_name, last_name and primary_email required' });
//     } else {
//         console.log('registration', data.password);
//         let hashPair = models.passwordHashing(data.password, '');
//         console.log('registration hashed', hashPair.password);
//         data.username = data.username.toLowerCase();
//         data.password = hashPair.password;
//         data.salt = hashPair.salt;
//         console.log('data', data);
//         let newUser = new User(data);
//         newUser.save(function(err) {
//             if (err) {
//                 console.log(err);
//                 console.log('error posting to /v1/user')
//                 res.status(400).send('Error posting to /v1/user');
//             } else {
//                 // Attempt to create new Mongoose Object and insert into database
//                 console.log('New user: ' + data.username);
//                 req.session.username = data.username;
//                 res.status(201).send({ username: data.username });
//             }
//         });

//     }
// });

// // Handle GET to fetch session information
// app.get('/v1/session', function(req, res){
//     var session = req.session;
//     console.log('session', req.session);
//     if (session.username) {
//         res.status(201).send({
//             username: session.username
//         });
//     }
//     else {
//         res.status(400).send({
//             error: 'not logged in'
//         })
//     }
// });


// // Handle GET to fetch user information
// app.get('/v1/user/:username', function(req, res) {
//     User.where({ username: req.params.username.toLowerCase() }).findOne(function (err, doc) {
//         if (!doc) {
//             res.status(404).send({ error: 'unknown user' });
//         } else {
//             res.status(200).send(doc);
//         }
//     });
// });

// function fisherYates ( myArray ) {
//     var i = myArray.length;
//     if ( i == 0 ) return false;
//     while ( --i ) {
//         var j = Math.floor( Math.random() * ( i + 1 ) );
//         var tempi = myArray[i];
//         var tempj = myArray[j];
//         myArray[i] = tempj;
//         myArray[j] = tempi;
//     }
// }

// app.get('/v1/game/shuffle', function(req, res) {
//     let jokers = req.query.jokers;
//     let cards = [];
//     let suits = ["spades", "clubs", "diamonds", "hearts"];
//     for (let i = 0; i < 4; i++) {
//         let curSuit = suits[i];
//         for (let j = 1; j < 14; j++) {
//             cards.push({suit: curSuit, value: j});
//         }
//     }
//     if (jokers === 'true') {
//         cards.push({suit: 'redjoker', value: 14});
//         cards.push({suit: 'blackjoker', value: 14});
//     }
//     fisherYates(cards);
//     if ((jokers === 'false' && cards.length === 52) || (jokers === 'true' && cards.length === 54)) {
//         res.status(200).send(cards);
//     }
//     else {
//         res.status(404).send({ error: 'could not initialize card stack' })
//     }
// });

// app.get('/v1/games', function(req,res) {
//     let username = req.param('username');
//     if (!username) {
//         username = req.session.username
//         console.log(req.session);
//     }
//     Game.where({ creator: username }).find( function(err, docs) {
//         res.status(200).send(docs);
//     })
// });

// // Handle GET to fetch game information
// app.get('/v1/game/:id', function(req, res) {
//     console.log('req.session.username',req.session.username);
//     Game.where( { _id: req.params.id } ).findOne( function(err, doc) {
//         if (!doc) {
//             res.status(404).send({ error: 'unknown game id' });
//         } else {
//             if (req.session.username === doc.creator) {
//                 res.status(200).send(doc);

//             } else {
//                 res.status(403).send({error: 'forbidden access'});
//             }
//         }
//     });
// });

// app.put('/v1/game/:id', function(req, res) {
//     if (req.body.type === 'state') {
//         let piles = ['discard', 'stack1', 'stack2', 'stack3', 'stack4', 'pile1', 'pile2', 'pile3', 'pile4',
//             'pile5', 'pile6', 'pile7'];
//         for (let i = 0; i < 12; i++) {
//             if (!req.body.state[piles[i]]) {
//                 req.body.state[piles[i]] = [];
//             }
//         }
//         let newState;
//         Game.where({_id: req.params.id}).findOne(function (err, doc) {
//             if (err) res.status(404).send({error: 'unknown game id'});
//             console.log('/v1/game PUT doc.state', doc.state);
//             newState = doc.state;
//             newState.push(req.body.state);
//             let query = Game.update({_id: req.params.id}, {state: newState});
//             query.exec();
//             console.log('pushed state', newState);
//             res.status(200).send({success: 'cool'});
//         });
//     } else {
//         res.status(404).send({success: 'unknown PUT'});
//     }


// });


// // Handle POST to create a new game
// app.post('/v1/game', function(req, res) {
//     if (req.session.username) {
//         console.log(req.session);
//         let data = req.body;
//         if (!data || !data.type || !data.num_players || !data.name || !data.deck || !data.draw_num) {
//             res.status(400).send({error: 'all form fields required'});
//         } else {
//             let newGame = _.pick(data, 'type', 'num_players', 'name', 'deck');
//             let now = Date();
//             newGame = _.extend(newGame, {
//                 creator: req.session.username,
//                 state: [],
//                 players: [req.session.username],
//                 turn: req.session.username,
//                 start_date: now
//             });
//             let game = Game(newGame);
//             game.save(function (err) {
//                 if (err) {
//                     console.log(err);
//                     console.log('error posting to /v1/game')
//                     res.status(400).send('Error posting to /v1/game');
//                 } else {
//                     // Attempt to create new Mongoose Object and insert into database
//                     res.status(201).send({planid: game.id});
//                 }
//             });
//         }
//     } else {
//         res.status(403).send('Cannot create game without logging in.');
//     }
// });

// app.get('/v1/moves', function(req, res) {
//     console.log('request', req.query.state);
//     let results = validMoves(req.query.state);
//     res.status(201).send({results: results});
// });

app.get('*', function(req, res) {
    res.render('base', {
        title: 'YOKO KANAI'
    });
});



let server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});