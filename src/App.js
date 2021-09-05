import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import PhoneBookForm from './components/PhoneBookForm';
import InformationTable from './components/InformationTable';
import CounterOne from './components/CounterOne';

export const UserContext = React.createContext()

function App() {
  console.log('App')
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res)
        const allData = []
        res.data.forEach(val => {
          const [userFirstname, userLastname] = val.name.split(' ')
          allData.push({ userFirstname, userLastname, userPhone: val.phone })
        });
        setUsers(allData)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 
  // useCallback function store the memorized version of function and only changes when 
  // its dependency changes so it will not re-render other component when parent component 
  // state or props not changed since reference of function will be same after cache.
  const addEntryToPhoneBook = useCallback((user)=>{
    setUsers(prevState => [...prevState, user]);
  },[]);

  // const addEntryToPhoneBook = (user)=>{
  //   setUsers(prevState => [...prevState, user]);
  // };
  return (
    <section>
      <CounterOne/>
      <br/>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <UserContext.Provider value={'Siddharth'}>
        <InformationTable users={users} />
      </UserContext.Provider>
    </section>
  );
}

export default App;
