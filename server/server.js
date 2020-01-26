"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const usersBl = require('./routing/users-bl');
const PORT = 3201;
const cors = require('cors');
const SECRET_KEY_FOR_JWT = '687d6f87sd6f87sd6f78sd6f87sd';
app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
    /* console.log({
        method: req.method,
        path: req.path,
        originalUrl: req.originalUrl,
        body: req.body,
        params: req.params,
        query: req.query,
        url: req.url
    }) */
    const allowed = {
        home: req.path === '/',
        register: req.method === 'POST' && req.path === '/register',
        login: req.method === 'POST' && req.path === '/login',
    }

    if (allowed.register || allowed.login || allowed.home) {
        next();
    } else {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                jwt.verify(token, SECRET_KEY_FOR_JWT);
                next()
            } catch (ex) {
                res.status(401).send();
            }
        } else {
            res.status(401).send();
        }
    }
})

app.get('/user', (req, res) => {
    usersBl.getUsers((e, d) => {
        if (e) {
            return res.status(400).send('no users have been found');
        } else {
            return res.send(d);
        }
    })
})

app.post('/login', function (req, res) {
    const userToValidate = {
        userName: req.body.userName,
        password: req.body.password,
    }
    usersBl.validateUser(userToValidate, (e, user) => {
        if (e) {
            return res.status(400).send('no user has been found');
        } else {
            const token = jwt.sign({
                userId: user.id,
                userIp: req.ip
            }, SECRET_KEY_FOR_JWT,
                {
                    expiresIn: '365d'
                });
            const userToClient = {
                userId: user.id,
                userName: user.userName,
                token: token
            }

            return res.send(userToClient);
        }
    })
});

app.post('/register', function (req, res) {
    const userToAdd = req.body;
    usersBl.isUserNameAlreadyExist(userToAdd, (e) => {
        if (e) {
            res.status(400).send('user name taken. please select a different name');
        } else {
            usersBl.registerUser(userToAdd, (e) => {
                if (e) {
                    return res.status(500).send();
                } else {
                    return res.send();
                }
            })
        }
    })
});

app.post('/watch-history', function (req, res) {
    const objToAdd = req.body;
    usersBl.addToWatchList(objToAdd, (e, d) => {
        if (e) {
            return res.status(500).send(e);
        } else {
            return res.send(d);
        }
    })
});

app.get('/top5Videos/:id', function (req, res) {
    const userId = req.params.id;
    usersBl.getUserTop5Videos(userId, (e, videosIdStr) => {
        if (e) {
            res.status(500).send(e);
        } else {

            res.send({ top5VideosId: videosIdStr });
        }
    })
})

app.listen(process.env.PORT || PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`),
);
