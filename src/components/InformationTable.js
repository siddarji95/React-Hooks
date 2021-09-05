import React, { useContext } from 'react'
import { UserContext } from '../App'
function InformationTable(props) {
    console.log('InformationTable');
    const user = useContext(UserContext)
    return (
        <>
        <h2>User: {user}</h2>
        <table className='informationTable'>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user, key) => {
                    return (
                        <tr key={key}>
                            <td>{user.userFirstname}</td>
                            <td>{user.userLastname}</td>
                            <td>{user.userPhone}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}

export default React.memo(InformationTable)