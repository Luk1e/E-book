import React from 'react';
import Users from '../DataBase/Users';

const User = Users.find(user => { return user.id == 3 });
const updateImg = (Image) => {
    console.log("imgUpdated");
}
const updateName = (Name) => {
    console.log("nameUpdated");
}
const updatePass = (Pass) => {
    console.log("passUpdated");
}
export default User;
export  { updateImg, updateName, updatePass};

