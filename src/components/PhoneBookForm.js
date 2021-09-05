import React, { useState, useRef, useEffect } from 'react'

function PhoneBookForm({ addEntryToPhoneBook }) {
    console.log('PhoneBookForm');
    const [inputs, setInputs] = useState({});
    const inputRef = useRef(null)
    useEffect(() => {
		inputRef.current.focus()
	}, [])
    const handleSubmit = event => {
        event.preventDefault();
        if (Object.keys(inputs).length === 0) {
            return;
        }
        addEntryToPhoneBook(inputs);
        setInputs({});
    };
    const handleInputChange = event => {
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
        console.log(inputs);
    };
    return (
        <form onSubmit={handleSubmit} >
            <label>First name:</label>
            <br />
            <input
                className='userFirstname'
                ref = {inputRef}
                name='userFirstname'
                type='text'
                value={inputs.userFirstname || ''}
                onChange={handleInputChange}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                className='userLastname'
                name='userLastname'
                type='text'
                value={inputs.userLastname || ''}
                onChange={handleInputChange}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                className='userPhone'
                name='userPhone'
                type='text'
                value={inputs.userPhone || ''}
                onChange={handleInputChange}
            />
            <br />
            <input
                className='submitButton'
                type='submit'
                value='Add User'
                onSubmit={handleSubmit}
            />
        </form>
    );
}

export default React.memo(PhoneBookForm);