import './Signup.css'
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { validate } from 'react-email-validator';
import './Responsive.css'
import { useNavigate } from 'react-router-dom'




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

    const signUpHandler = (e) => {
        e.preventDefault()

        setName2Err(inpName2.length === 0)
        setSurnameErr(inpSurname.length === 0)
        setOrgNameErr(orgName.length === 0)
        setOrgAddressErr(orgAddress.length === 0)
        setMailErr(mail.length === 0 || !validate(mail))
        setNumErr(num === undefined || num.length === 0)
        setPassword2Err(password.length < 6)
        setUsernameErr(username.length < 4)

        const arr = Array.from(inputs)

        const equalsZero = arr.some(e => e.value.length === 0)

        const errors = [inpName2Err, inpSurnameErr, orgNameErr, orgAddressErr, numErr, mailErr, usernameErr, passwordErr]
        const equalsTrue = errors.some(e => e === true)

        setInfo([equalsZero, equalsTrue])
        
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
                if (!equalsTrue && !equalsZero) {
                    localStorage.clear()
                    localStorage.setItem('username', result.username)
                    localStorage.setItem('password', result.password)
                    localStorage.setItem('fullName', result.fullName)
                    navigate('/')
                }
            })
        })
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
                        <input type="text" className='su-inp' name="name" id="su-name" onChange={(e) => {
                            setName2(e.target.value);
                            e.target.value.length === 0 ? setName2Err(true) : setName2Err(false)

                        }} />
                        {
                            inpName2Err ? <span >Please enter a valid name</span> : null

                        }
                    </div>
                    <div>
                        <label htmlFor="su-name">Surname</label>
                        <input type="text" className='su-inp' name="surname" id="su-surname" onChange={(e) => {
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
                    <input type="text" className='su-inp' name="o-name" id="su-on" autoComplete="off" onChange={(e) => {
                        setOrgName(e.target.value)
                        e.target.value.length === 0 ? setOrgNameErr(true) : setOrgNameErr(false)
                    }} />
                    {
                        orgNameErr ? <span >Please enter a valid organization name</span> : null
                    }

                    <label htmlFor="su-address">Address</label>
                    <input type="text" className='su-inp' name="address" id="su-address" onChange={(e) => {
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
                        <PhoneInput defaultCountry={'AZ'} className='su-inp-ph' value={num} name="number" id="su-number" onChange={setNum} onInput={func3}
                        />
                        {
                            numErr ? <span >Please enter a valid telephone number</span> : null
                        }

                    </div>
                    <div>

                        <label htmlFor="su-email">E-mail</label>
                        <input type="email" required name="email" id="su-email" className='su-inp' onChange={(e) => {
                            setMail(e.target.value)
                            e.target.value.length === 0 ? setMailErr(true) : setMailErr(false)
                        }} />
                        {
                            mailErr ? <span >Please enter a valid e-mail</span> : null
                        }

                    </div>
                    <div>

                        <label htmlFor="su-password">Password</label>
                        <input type="password" name="password" id="su-password" className='su-inp' onChange={(e) => {
                            setPassword2(e.target.value)
                            e.target.value.length < 6 ? setPassword2Err(true) : setPassword2Err(false);


                        }} />
                        {
                            passwordErr ? <span>Please enter a valid password</span> : null
                        }
                    </div>
                    <div>
                        <label htmlFor="su-username">Username</label>
                        <input type="text" name="username" className='su-inp' id="su-username" onChange={(e) => {
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