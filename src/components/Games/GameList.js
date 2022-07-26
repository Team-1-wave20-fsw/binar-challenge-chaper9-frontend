import React, { useEffect, useState } from "react";
import './GameList.css';
import axios from 'axios';

export default function GameList() {

    const [users, setUsers] = useState([])
    console.log(users);
    const getUsers = async () => {
        try {
            let response = await axios.get(`http://localhost:4000/api/game`)
            setUsers(response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <section className="boxs" onClick={() => window.location = "/DetailGames"}>
                {users?.data?.map((user, index) => (
                    <div key={index} className="box" style={{ width: '15rem' }}>
                        <img className="logo" src={user.imageUrl} alt="boy" />
                        <p style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', textAlign: 'center' }}>{user.name}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}



