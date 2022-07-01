import './Profile.css'
import React, { useState, useEffect } from "react";
import ClockApp from '../Widgets/Clock';
import Calendar from 'react-calendar/dist/umd/Calendar';
import ProfilePicture from '../../images/profile-picture.png'
import { useNavigate } from 'react-router-dom'


function Profile() {
    const [fullName, setFullName] = useState('Name Surname')
    const navigate = useNavigate()

    useEffect(()=>{
        setFullName(localStorage.getItem('fullName'))
    
       }, [])
    

    const signOut = () =>{
        localStorage.clear()
        navigate('/')
    }
    return (
        <div id='profile-container'>
            <section id='section-1'>
                <div id='name-container'>
                    <img src={ProfilePicture} alt="Profile" />
                    <h1 className="full-name">{fullName}</h1>
                </div>
                <div id='profile-clock'>
                    <ClockApp />
                </div>
            </section>
            <section id='section-2'>
                <div id='profile-calendar'>
                    <Calendar />
                    
                </div>
                <div id='profile-info'>
                    
                    </div>
                    <button id='sign-out' onClick={signOut}>Sign out!</button>
            </section>
        </div>
    );
}

export default Profile