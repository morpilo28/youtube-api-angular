//TODO: make all strings to lower case;

const dal = require('../dal');
const watchHistoryTable = 'watch_history';
const userTable = 'user';
const userModel = require('../models/userModel');

function isUserNameAlreadyExist(registeredUser, callback) {
    //checking if a userName already exist in the db
    registeredUser = new userModel.User(null, registeredUser.userName, registeredUser.password);
    dal.readAll(`select * from ${userTable} `, (e, allUsers) => {
        allUsers = createUserTypeObj(allUsers);
        if (e) {
            callback(e);
        } else {
            let singleObj = allUsers.filter((obj) => obj.userName === registeredUser.userName);
            if (singleObj.length > 0) {
                callback('user name taken.');
            } else {
                callback(null);
            }
        }
    })
}

function registerUser(userToAdd, callback) {
    userToAdd = new userModel.User(null, userToAdd.userName, userToAdd.password);
    const { userName, password } = userToAdd;
    dal.createOne(`insert into ${userTable} (userName, password) values ('${userName}', '${password}');`, `select * from ${userTable} where userName like '${userName}'`, (e, data) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function validateUser(userToValidate, callback) {
    //checking if a user exist in the db
    dal.readAll(`select * from ${userTable}`, (e, allUsers) => {
        allUsers = createUserTypeObj(allUsers);
        if (e) {
            callback(e);
        } else {
            let singleObj = allUsers.filter((obj) => obj.userName === userToValidate.userName && obj.password === userToValidate.password);
            if (singleObj.length === 0) {
                callback('no user has been found');
            } else if (singleObj.length > 1) {
                console.log('there is more than one user under the same name');
            } else {
                callback(null, singleObj[0]);
            }
        }
    })
}

function createUserTypeObj(allUsers) {
    allUsers = allUsers.map(element => {
        return new userModel.User(element.id, element.userName, element.password);
    });
    return allUsers;
}

function getUsers(callback) {
    dal.readAll(`select * from ${userTable}`, (e, d) => {
        if (e) {
            callback(e);
        } else {
            callback(null, d);
        }
    })
}

function addToWatchList(objToAdd, callback) {
    console.log(objToAdd);
    dal.createOne(`insert into ${watchHistoryTable} (userId, videoId) values (${objToAdd.userId}, '${objToAdd.videoId}');`, `select * from ${watchHistoryTable} where id = (select max(id) from ${watchHistoryTable})`, (e, data) => {
        if (e) {
            callback(e);
        } else {
            callback(null, data);
        }
    })
}

/* function getUserTop5Videos(userId, callback) {
    userId = Number(userId);
    dal.readAll(`select videoId, count(videoId) as videoId_occurrence from ${watchHistoryTable} where userId = ${userId} group by videoId order by videoId_occurrence desc limit 5;`,(e,d)=>{
        if(e){
            callback(e);
        }else{
            callback(null,d);
        }
    })
} */

/* 
select videoId,
count(videoId) as videoId_occurrence 
from watch_history
where userId = 4
group by videoId 
order by videoId_occurrence desc 
limit 5

*/

module.exports = {
    getUsers: getUsers,
    registerUser: registerUser,
    validateUser: validateUser,
    isUserNameAlreadyExist: isUserNameAlreadyExist,
    addToWatchList: addToWatchList,
    /* getUserTop5Videos: getUserTop5Videos */
}