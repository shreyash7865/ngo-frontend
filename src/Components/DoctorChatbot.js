import React, { useState, useEffect } from 'react';
import './DoctorChatbot.css';
const axios = require('axios');



const DoctorChatbot = () => {
    //   const api_key = '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'
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:2020/api/donor/chatbot', { prompt })
            .then((res) => {
                console.log(res.data);
                setResponse(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }





    return (
        <div className='chatbot-doctor'>
            <div className='chatbot-doctor-container'>
                <div className='chatbot-doctor-header'>
                    <h1>Doctor Chatbot</h1>
                </div>
                <div className='chatbot-doctor-body'>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <label htmlFor='prompt'>Ask Anything</label> <br />
                        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} /> <br />
                        <input type="submit" />
                    </form>
                <div className="answer"><h3>
                    Take Paracetamol or Dolo 600 to relieve you of fever</h3></div>

                </div>
            </div>
        </div>
    );
};

export default DoctorChatbot;