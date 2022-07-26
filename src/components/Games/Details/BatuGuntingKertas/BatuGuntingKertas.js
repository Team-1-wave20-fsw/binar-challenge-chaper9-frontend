import React, { useEffect, useState } from "react";
import './BatuGuntingKertas.css';
import foto from '../../../../assets/images/main-bg.jpg';
import axios from 'axios';

export default function BatuGuntingKertas() {
    const [score,setScore]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/users/score').then(res=>{
            console.log(res.data.scores)
            setScore(res.data.scores)
        })
    },[])
    const items = [
        {
            no: "1",
            nama: score[0].fullname,
            score: score[0].total_score
        },
        {
            no: "2",
            nama: score[1].fullname,
            score: score[1].total_score
        },
        {
            no: "3",
            nama: score[2].fullname,
            score: score[2].total_score
        }
    ]
    const [games, setGames] = useState([]);
    console.log(games);
    const getGames = async () => {
        try {
            let response = await axios.get(`http://localhost:4000/api/game`)
            setGames(response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getGames();
    }, [])

    return (
        <div className="containerBatu">
            <div className="row">
                <div className="col-xl-6 mb-5 kiri">
                    {games?.data?.map((game, index) => (
                        <div key={index}>
                            <h3 className="gamedetails_texth3">{game.name}</h3>
                            <p className='gamedetails_textp'>{game.description}</p>
                        </div>
                    ))}
                    <div className="bungkus">
                        <p className="high_p">Highscore Top 3</p>
                        <table className='table_leaderboard table-hover table-striped table-bordered'>
                            <thead>
                                <tr className='tr'>
                                    <th className='th'>
                                        <p>Name</p>
                                    </th>
                                    <th className='th'>
                                        <p>Score</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr className='tr' data-index={index}>
                                        <td className='td'>{item.nama}</td>
                                        <td className='td'>{item.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="b_play d-grid  ">
                        <button className="play btn btn-primary" type="button" onClick={() => window.location = "/GamesBatuGuntingKertas"}>Play Now</button>
                    </div>
                </div>
                <br />
                <div className="col-xl-6 mb-5 kanan">
                    <img
                        className="bkg"
                        src={foto}
                        alt="foto" />
                </div>
            </div>
        </div>
    )
}