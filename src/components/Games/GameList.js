import React from "react";
import './GameList.css';

export default function GameList() {
    const items = [
        {
            title: "Batu Gunting Kertas",
            imageUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            title: "Batu Gunting Kertas",
            imageUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            title: "Batu Gunting Kertas",
            imageUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            title: "Batu Gunting Kertas",
            imageUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        }
    ];

    return (
        <div>
            <section className="boxs">
                {items.map((item, index) => (
                    <div className="box" style={{ width: '15rem' }}>
                        <img className="logo" src={item.imageUrl} alt="boy" />
                        <p style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', textAlign: 'center' }}>{item.title}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
