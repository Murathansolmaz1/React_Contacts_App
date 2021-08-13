import React from 'react'
import { useState } from 'react'

function List( { contacts } ) {

    const [filterText, setFilterText] = useState( '' );

    const filtered = contacts.filter( ( contact ) => {
        return Object.keys( contact ).some( ( key ) => 
            contact[key].toString().toLowerCase().includes(filterText.toLowerCase())
     );
        });

    console.log( filtered );

    return (
        <div>
            <h1>Filter</h1>
            <input placeholder = "Filter Contact" value = {filterText} onChange = {(e) => setFilterText(e.target.value)}></input>

            <hr />

            <h1>Contact List</h1>
            <ul className = "list">
                { filtered.map( (contact, i) => 
                <li  key = {i}>
                    <span>{contact.fullname}</span>
                    <span>{contact.phone_number}</span>
                    
                    </li>) }
            </ul>

            <p>
               Total Contacts :  {filtered.length}
            </p>
        </div>
    )
}

export default List