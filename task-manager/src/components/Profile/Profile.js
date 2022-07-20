import './Profile.css'
import './Responsive.css'
import React, { useState, useEffect, useMemo } from "react";
import ClockApp from '../Widgets/Clock';
import Calendar from 'react-calendar/dist/umd/Calendar';
import ProfilePicture from '../../images/profile-picture.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLocationDot, faPhone, faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons'




function Profile() {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState()
    const fullName = useMemo(() => localStorage.getItem('fullName'), [])
    const userID = useMemo(() => localStorage.getItem('id'), [])
    const data = useMemo(() => JSON.parse(localStorage.getItem('data')))
    const dataCheck = !!data
    const info = !!userInfo

    useEffect(() => {


        fetch("https://localhost:44330/api/customer-list")
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setUserInfo(resp[userID])
                        // console.log();
                    })

            })
            .catch(error => {
                // alert('Can\'t connect to the server: ' + error.message)
                console.log(error.message);
            })
    }, [])

    const signOut = () => {
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

                    {dataCheck ?
                        <div className='personal'>
                            <h1><FontAwesomeIcon className='icon' icon={faAt} /> {data.username}</h1>
                            <h1><FontAwesomeIcon className='icon' icon={faBuilding} /> {data.organizationName}</h1>
                            <h1><FontAwesomeIcon className='icon' icon={faLocationDot} /> {data.organizationAddress}</h1>
                            <h1><FontAwesomeIcon className='icon' icon={faPhone} /> {data.phoneNumber}</h1>
                            <h1><FontAwesomeIcon className='icon' icon={faEnvelope} />  {data.mail}</h1>

                        </div> :
                        info ?
                            <div className='personal'>
                                <h1><FontAwesomeIcon className='icon' icon={faAt} /> {userInfo.username}</h1>
                                <h1><FontAwesomeIcon className='icon' icon={faBuilding} /> {userInfo.organizationName}</h1>
                                <h1><FontAwesomeIcon className='icon' icon={faLocationDot} /> {userInfo.organizationAddress}</h1>
                                <h1><FontAwesomeIcon className='icon' icon={faPhone} /> {userInfo.phoneNumber}</h1>
                                <h1><FontAwesomeIcon className='icon' icon={faEnvelope} />  {userInfo.mail}</h1>

                            </div>
                            :
                            null}

                </div>
                <button id='sign-out' onClick={signOut}>Sign out!</button>
            </section>
        </div>
    );
}

export default Profile