import './Signup.css'
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { validate } from 'react-email-validator';
import './Responsive.css'
import { useNavigate } from 'react-router-dom'
import Home from '../Home Page/Home';




function Signup(props) {
    const
        [inpName2, setName2] = useState(''),
        [inpName2Err, setName2Err] = useState(false)

    const
        [inpSurname, setSurname] = useState(''),
        [inpSurnameErr, setSurnameErr] = useState(false)

    const
        [orgName, setOrgName] = useState(''),
        [orgNameErr, setOrgNameErr] = useState(false)

    const
        [orgAddress, setOrgAddress] = useState(''),
        [orgAddressErr, setOrgAddressErr] = useState(false)

    const
        [num, setNum] = useState(''),
        [numErr, setNumErr] = useState(false)

    const
        [mail, setMail] = useState(''),
        [mailErr, setMailErr] = useState(false)

    const
        [username, setUsername] = useState(''),
        [usernameErr, setUsernameErr] = useState(false)
    const
        [password, setPassword2] = useState(''),
        [passwordErr, setPassword2Err] = useState(false)

    const navigate = useNavigate()

    const inputs = document.querySelectorAll('.sign-up input')

    const [info, setInfo] = useState()

    const [equalsZero, setEqZero] = useState()
    const [equalsTrue, setEqTrue] = useState()

    function signUpHandler(e) {
        e.preventDefault()

        inpName2.length === 0 ? setName2Err(true) : setName2Err(false)

        inpSurname.length === 0 ? setSurnameErr(true) : setSurnameErr(false)

        orgName.length === 0 ? setOrgNameErr(true) : setOrgNameErr(false)

        orgAddress.length === 0 ? setOrgAddressErr(true) : setOrgAddressErr(false)

        mail.length === 0 ? setMailErr(true) : setMailErr(false)
        validate(mail) ? setMailErr(false) : setMailErr(true)


        num === undefined ? setNumErr(true) : num.length === 0 ? setNumErr(true) : setNumErr(false)

        password.length < 6 ? setPassword2Err(true) : setPassword2Err(false);

        username.length < 4 ? setUsernameErr(true) : setUsernameErr(false)



        const arr = Array.from(inputs)

        let zer = arr.some(e => e.value.length === 0)
        setEqZero(zer)
        const errors = [inpName2Err, inpSurnameErr, orgNameErr, orgAddressErr, numErr, mailErr, usernameErr, passwordErr]
        let tr = errors.some(e => e === true)
        setEqTrue(tr)




        

        const userData = {
            name: inpName2,
            surname: inpSurname,
            fullName: inpName2 + ' ' + inpSurname,
            organizationName: orgName,
            organizationAddress: orgAddress,
            phoneNumber: num,
            mail: mail,
            username: username,
            password: password
        }

        fetch("https://localhost:44330/api/customer-list", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((resp) => {
            resp.json().then((result) => {
                console.log('result',result);
                if ((equalsTrue === false) && (equalsZero === false)) {
                    localStorage.clear()
                    localStorage.setItem('username', result.username)
                    localStorage.setItem('password', result.password)
                    localStorage.setItem('fullName', result.fullName)
                    navigate('/home')
                }
            })
        })
        console.log(userData);



    }

    useEffect(() => {
        setInfo([equalsZero, equalsTrue])

    }, [equalsZero, equalsTrue])

    function func1() {
        return props.layer()
    }
    function func2() {
        return props.style(info)


    }

    function func3(e) {
        num === undefined ? setNumErr(true) : num.length - 1 === 0 ? setNumErr(true) : setNumErr(false)

        console.log(num);
    }


    return (
        <div id='sign-up' >
            <div className="sign-up">

                <h1>Sign Up</h1>
                <div className="su-ns">
                    <div>
                        <label htmlFor="su-name">Name</label>
                        <input type="text" name="name" id="su-name" onChange={(e) => {
                            setName2(e.target.value);
                            e.target.value.length === 0 ? setName2Err(true) : setName2Err(false)

                        }} />
                        {
                            inpName2Err ? <span >Please enter a valid name</span> : null

                        }
                    </div>
                    <div>
                        <label htmlFor="su-name">Surname</label>
                        <input type="text" name="surname" id="su-surname" onChange={(e) => {
                            setSurname(e.target.value)
                            e.target.value.length === 0 ? setSurnameErr(true) : setSurnameErr(false)

                        }} />
                        {
                            inpSurnameErr ? <span>Please enter a valid surname</span> : null
                        }
                    </div>
                </div>
                <div className="organization">
                    <label htmlFor="su-on">Organization name</label>
                    <input type="text" name="o-name" id="su-on" autoComplete="off" onChange={(e) => {
                        setOrgName(e.target.value)
                        e.target.value.length === 0 ? setOrgNameErr(true) : setOrgNameErr(false)
                    }} />
                    {
                        orgNameErr ? <span >Please enter a valid organization name</span> : null
                    }

                    <label htmlFor="su-address">Address</label>
                    <input type="text" name="address" id="su-address" onChange={(e) => {
                        setOrgAddress(e.target.value)
                        e.target.value.length === 0 ? setOrgAddressErr(true) : setOrgAddressErr(false)
                    }} />
                    {
                        orgAddressErr ? <span>Please enter a valid address</span> : null
                    }

                </div>
                <div className="grid">
                    <div id='num'>

                        <label htmlFor="su-number">Phone number</label>
                        <PhoneInput defaultCountry={'AZ'} value={num} name="number" id="su-number" onChange={setNum} onInput={func3}
                        />
                        {
                            numErr ? <span >Please enter a valid telephone number</span> : null
                        }

                    </div>
                    <div>

                        <label htmlFor="su-email">E-mail</label>
                        <input type="email" required name="email" id="su-email" onChange={(e) => {
                            setMail(e.target.value)
                            e.target.value.length === 0 ? setMailErr(true) : setMailErr(false)
                        }} />
                        {
                            mailErr ? <span >Please enter a valid e-mail</span> : null
                        }

                    </div>
                    <div>

                        <label htmlFor="su-password">Password</label>
                        <input type="password" name="password" id="su-password" onChange={(e) => {
                            setPassword2(e.target.value)
                            e.target.value.length < 6 ? setPassword2Err(true) : setPassword2Err(false);


                        }} />
                        {
                            passwordErr ? <span>Please enter a valid password</span> : null
                        }
                    </div>
                    <div>
                        <label htmlFor="su-username">Username</label>
                        <input type="text" name="username" id="su-username" onChange={(e) => {
                            setUsername(e.target.value)
                            e.target.value.length < 4 ? setUsernameErr(true) : setUsernameErr(false)

                        }} />
                        {
                            usernameErr ? <span >Please enter a valid username</span> : null
                        }

                    </div>
                </div>
                <button id='su-submit' type="submit" onClick={signUpHandler}>Submit</button>


                <button id="create" onClick={() => { func1(); func2() }}>Sign in!</button>
            </div>



        </div>


    )
}


export default Signup