import './Home.css'
import React, { useEffect, useState} from "react";
import CalendarApp from '../Widgets/Calendar';
import ClockApp from '../Widgets/Clock'
import Card from './Card';
import ProfilePicture from '../../images/profile-picture.png'
import { useNavigate } from 'react-router-dom'

const generateID = () => `${Math.random() * 1000}`

function Home() {
    const [cards, updateCards] = useState([])
    const [fullName, setFullName] = useState('Name Surname')
    const navigate = useNavigate()

   useEffect(()=>{
    setFullName(localStorage.getItem('fullName'))
   }, [])

   

    const delFunc = (id) => {
        setTimeout(() => {
            updateCards(cards.filter(item => item.id !== id))
        }, 300);

    }



    const addCard = () => {
        updateCards([...cards, { id: generateID() }]);

    }

    const renderCard = (card) => (
        <div key={card.id}>
            <div className="pos">
                <Card delete={delFunc} />
                <button className='del-btn' onClick={() => delFunc(card.id)}>X</button>
            </div>
        </div>
    )
    return (
        <div id="home-main">
            <div className="container">
                <div className="nav">
                    <img className='pp' src={ProfilePicture} alt="Profile" />
                    <button id='full-name' onClick={() => navigate('/profile')}>{fullName}</button>
                    <p id='number-of-tasks'>Number of tasks: {cards.length}</p>
                </div>
                <div className="body">
                    <div>{cards.map(renderCard)}</div>
                </div>
                <div className="widgets">
                    <div id="clock">
                        <ClockApp />
                    </div>
                    <div id="calendar">
                        <CalendarApp />
                    </div>
                    <div className="add-task">
                        <button onClick={addCard}>Add new task</button>
                        <button onClick={() => updateCards([])}>Delete all tasks</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home