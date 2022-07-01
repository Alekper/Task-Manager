import './Signin.css'
import Signup from '../Sign up/Signup'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Responsive.css'
function Signin() {


    const
        layerContent1 = 'Welcome, new user!',
        layerContent2 = 'Welcome back!',
        [layerBehavior, setLayerBehavior] = useState(false);

    const
        [inpName, setName] = useState(''),
        [nameErr, setNameErr] = useState(false),
        [fullNameInfo, setFullNameInfo] = useState('')
    const
        [inpPassword, setPassword] = useState(''),
        [passwordErr, setPasswordErr] = useState(false);
    // const 
    // [incorrectLogin, setIncorrectLogin] = useState(true)
    // [incorrectLogin, setIncorrectLogin] = useState(true)

    const navigate = useNavigate()
    const [layerHeight, setLayerHeight] = useState()
    const [layerHeight2, setLayerHeight2] = useState()
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch("https://localhost:44330/api/customer-list").then((result) => {
            result.json().then((resp) => {
                setUserData(resp)
                console.log(resp);
                
            })
        })
    }, [])


    function layerStyle(data) {
        setLayerHeight(data[0])
        setLayerHeight2(data[1])

    }

    function handleLayerBehavior(e) {

        setLayerBehavior(!layerBehavior)

    }





    function formHandler(e) {
        let obj = {
            username: inpName,
            password: inpPassword
        }
        e.preventDefault()
        console.log(obj);
        inpName.length === 0 ? setNameErr(true) : setNameErr(false);
        inpPassword.length === 0 ? setPasswordErr(true) : setPasswordErr(false);


        for (let i = 0; i < userData.length; i++) {
            if (inpName === userData[i].mail && inpPassword === userData[i].password) {
                localStorage.setItem('username', inpName)
                localStorage.setItem('password', inpPassword)
                localStorage.setItem('fullName', userData[i].fullName)
                navigate('/home')

            }

        }
    }



    return (
        <div id="home-page-container">
            <div className="user-container">
                <div className="form-container">
                    <div className={`${layerBehavior ? "sign-in" : "sign-in none"}`}>
                        <div id='layer' style={{ height: layerHeight && !layerHeight2 ? '700px' : '100%' }} className={`${layerBehavior ? "layer2 layer-animation2" : "layer1 layer-animation"}`}>
                            <h1 className={`${layerBehavior ? "text2" : "text"}`}>{!layerBehavior ? layerContent1 : layerContent2}</h1>
                        </div>
                        <h1>Sign in</h1>

                        <label htmlFor="si-username">Username</label>
                        <input type="text" name="username" id="si-username" onInput={(e) => {
                            setName(e.target.value);
                            e.target.value.length < 4 ? setNameErr(true) : setNameErr(false);

                        }} />
                        {
                            nameErr ? <span>Invalid input</span> : null

                        }
                        <label htmlFor="si-password">Password</label>
                        <input type="password" name="password" id="si-password" onInput={(e) => {
                            setPassword(e.target.value)
                            e.target.value.length < 6 ? setPasswordErr(true) : setPasswordErr(false);

                        }} />
                        {
                            passwordErr ? <span>Invalid input</span> : null

                        }

                        <button id='si-submit' type='submit' onClick={formHandler} >Submit</button>

                        <button id="create" onClick={handleLayerBehavior} >Create new account!</button>
                    </div>
                    <div id="sign-up" className={`${!layerBehavior ? "none" : ""}`}>
                        <Signup layer={handleLayerBehavior} style={layerStyle} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Signin