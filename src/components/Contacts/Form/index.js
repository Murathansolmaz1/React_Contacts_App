import React from 'react'
import { useState } from 'react'

function Form({ addContacts , contacts }) {

    const [form, setForm] = useState({ fullname: "", phone_number: ""})

    const onChangeInput= (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fulname === "" || form.phone_number === "") {
            return false;
        }

        addContacts([...contacts,  form]);

        setForm({fullname: "", phone_number: ""})
        console.log(form);
    }


    return (
        <form onSubmit = {onSubmit}>
        <div>
            <div>
            <input name = "fullname" placeholder = "Full name" onChange = {onChangeInput} value = {form.fullname}></input>
            </div>

            <div>
            <input name = "phone_number" placeholder = "Phone Number" onChange = {onChangeInput} value = {form.phone_number}></input>
            </div>

            <div id = "add">
                <button>Add</button>
            </div>
        </div>
        </form>
    )
}

export default Form
