//TODO: make all strings to lower case;

const dal = require('../dal');
const table = 'user';
const userModel = require('../models/userModel');

function isUserNameAlreadyExist(registeredUser, callback) {
    //checking if a userName already exist in the db
    registeredUser = new userModel.User(null, registeredUser.userName, registeredUser.password);
    dal.readAll(`select * from ${table} `, (e, allUsers) => {
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
    dal.createOne(`insert into ${table} (userName, password) values ('${userName}', '${password}');`, `select * from ${table} where userName like '${userName}'`, (e, data) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function validateUser(userToValidate, callback) {
    //checking if a user exist in the db
    dal.readAll(`select * from ${table}`, (e, allUsers) => {
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

function getUsers(callback){
    dal.readAll(`select * from ${table}`,(e,d)=>{
        if(e){
            callback(e);
        }else{
            callback(null,d);
        }
    })
}

module.exports = {
    getUsers:getUsers,
    registerUser: registerUser,
    validateUser: validateUser,
    isUserNameAlreadyExist: isUserNameAlreadyExist,
}