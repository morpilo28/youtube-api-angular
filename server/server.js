"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const usersBl = require('./routing/users-bl');
const PORT = 3201;
const cors = require('cors');
// const SECRET_KEY_FOR_JWT = '687d6f87sd6f87sd6f78sd6f87sd';
app.use(bodyParser.json());
app.use(cors());


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
            const userToClient = {
                userId: user.id,
                userName: user.userName
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

app.listen(process.env.PORT || PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`),
);


/* 
 app.use((req, res, next) => {
      console.log({
          method: req.method,
          path: req.path,
          originalUrl: req.originalUrl,
          body: req.body,
          params: req.params,
          query: req.query,
          url: req.url
      }) 
     const allowed = {
         client: req.method === 'GET' && req.path === '/vacations/' && req.query.client === 'client',
         register: req.method === 'POST' && req.path === '/register',
         login: req.method === 'POST' && req.path === '/login',
     }

     if (allowed.register || allowed.login || allowed.client) {
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
 app.get('/vacations', (req, res) => {
     const userId = req.query.userId;
     let forChart = '';
     if (req.query.forChart) {
         forChart = req.query.forChart;
     } else {
         forChart = 'false';
     }
     vacationBl.getVacations(userId, (e, data) => {
         if (e) {
             return res.status(500).send();
         } else {
             return res.send(data);
         }
     }, forChart);
 });

 app.get('/vacations/:id', (req, res) => {
     const id = Number(req.params.id);
     vacationBl.getVacations((e, allVacations) => {
         if (e) {
             return res.status(500).send();
         } else {
             vacationBl.getSingleVacation(id, (e, singleVacationData) => {
                 if (e) {
                     return res.status(500).send();
                 } else {
                     responseObj = {
                         singleVacationData: singleVacationData,
                         allVacations: allVacations
                     }
                     return res.send(responseObj);
                 }
             })
         }
     })
 })

 app.post('/vacations', (req, res) => {
     const vacationToAddObj = req.body;
     vacationBl.createVacation(vacationToAddObj, (e, vacation) => {
         if (e) {
             if (e === 400) {
                 return res.status(400).send();
             } else {
                 return res.status(500).send(e);
             }
         } else {
             io.emit('ADD_VACATION', vacation);
             return res.send();
         }
     })
 })

 app.put('/vacations/:id', (req, res) => {
     const editedVacationData = req.body;
     vacationBl.updateVacation(editedVacationData, (e, updatedVacation) => {
         if (e) {
             return res.status(500).send();
         } else {
             io.emit('EDIT_VACATION', updatedVacation);
             return res.send();
         }
     })
 })

 app.delete('/vacations/:id', (req, res) => {
     const vacationId = req.body.id;
     const userId = req.body.userId;

     vacationBl.deleteVacation(vacationId, userId, (e) => {
         if (e) {
             return res.status(500).send();
         } else {
             io.emit('DELETE_VACATION', {id: vacationId});
         }
     })
 }) */