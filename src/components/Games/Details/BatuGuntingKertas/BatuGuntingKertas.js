import React from "react";
import './BatuGuntingKertas.css';
import foto from '../../../../assets/main-bg.jpg'

export default function BatuGuntingKertas() {
    const items = [
        {
            no: "1",
            nama: "boy",
            score: "99"
        },
        {
            no: "2",
            nama: "wahyu",
            score: "89"
        },
        {
            no: "3",
            nama: "jack",
            score: "79"
        }
    ]
    return (
        <div className="container">
            <div className="row ">
                <div className="col-xl-6 mb-5 kiri">
                    <h3 className="gamedetails_texth3">Gunting Kertas Batu</h3>
                    <p className='gamedetails_textp'>Aturannya sangat sederhana. Batu akan menang melawan gunting, gunting akan menang melawan kertas, dan kertas akan menang melawan batu. Ketiganya memiliki porsi yang sama untuk menang atau kalah.</p>
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
                        <button className="play btn btn-primary" type="button">Play Now</button>
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