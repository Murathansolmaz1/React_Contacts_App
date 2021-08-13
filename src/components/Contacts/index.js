import React from 'react'
import List from './List'
import Form from './Form'
import { useState , useEffect } from 'react';
import "./styles.css"

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Murathan",
            phone_number: "123456789"
        },
        {
            fullname: "Alper",
            phone_number: "111111111"
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    } , [contacts]);

    return (
        <div id = "container">
            <h1 id = "h1_">Contacts</h1>
            <List contacts = {contacts}/>
            <hr />
            <Form addContacts = { setContacts } contacts = {contacts}/>
        </div>
    )
}

export default Contacts;
