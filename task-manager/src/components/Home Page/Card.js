import React, { useState } from "react";



function Card(props) {


    const [title, setTitle] = useState('')
    const [titlePrev, setTitlePrev] = useState('')
    const [desPrev, setDesPrev] = useState('')
    const [description, setDesciption] = useState('')
    const [status, setStatus] = useState(false)
    function titleFunc(e) {
        setTitlePrev(e.target.value);
    }
    function desFunc(e) {
        setDesPrev(e.target.value)
    }

    return (
        <div className="card" >
            {
                title.length === 0 || title === undefined ?
                    <div>
                        <input type='text' onChange={(e) => titleFunc(e)} className='title-inp' placeholder='Set task title...' />
                        <button className="set-title" onClick={() => setTitle(titlePrev)} >Set</button>
                    </div>
                    :
                    <div>
                        <h1 id="card-title" className={status? 'title line-through': 'title'}>{title}</h1>
                        <button className="set-title" onClick={() => setTitle('')} >Reset</button>
                    </div>

            }
            <div>
                <div className="deadline" >
                    <small>Deadline</small>
                    <input type="date" className="date" />
                </div>
                <div className="status">
                    <small>Status</small>
                    <input type="checkbox" name="status" onClick={(e) =>{e.target.checked ? setStatus(true) : setStatus(false);}} className="status-inp" />
                </div>
            </div>

            <small>Description</small>
            {
                description.length === 0 || description === undefined ?
                    <div>

                        <textarea className="area" name="description" onChange={(e) => desFunc(e)} placeholder='Set task title...'></textarea>

                        <button className="set-title" onClick={() => setDesciption(desPrev)} >Set</button>
                    </div>
                    :
                    <div>
                        <p className={status? 'descrip line-through': 'descrip'}>{description}</p>
                        <button className="set-title" onClick={() => setDesciption('')} >Reset</button>

                    </div>

            }

        </div>
    )
}

export default Card