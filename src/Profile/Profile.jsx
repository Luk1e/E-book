import React from 'react';
import User from '../Login/User';
import { useParams }  from 'react-router-dom';
import Error from "../Error/Error";
//CSS
import "./Profile.css"
//PROFTEMPLATE
import Proftemplate from './ProfTemplate';

const Profile = ({ match }) => {
    const { id } = useParams();
    if (User) {
       
        if (id == User.id) {
            return Proftemplate();
        } else {
            return (<Error />);
        }
    }
    else {
         return <Error />;
    }
}

export default Profile;
